import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image, ActivityIndicator, Alert } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as ImagePicker from 'expo-image-picker';
import { userService, catadorService } from '../../src/services/api';

export default function DadosCatador() {
  // Estados para armazenar os dados do usuário e do perfil de catador
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    profileImage: null
  });
  
  const [catadorData, setCatadorData] = useState({
    workingArea: [],
    collectMaterials: [],
    transportType: '',
    experience: 0,
    bio: '',
    rating: 0,
    isVerified: false,
    gamificationPoints: 0,
    badges: []
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [catadorId, setCatadorId] = useState(null);

  // Carregar dados do usuário ao montar o componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // Em um cenário real, você buscaria o ID do usuário logado
        // Por enquanto, vamos usar um ID fixo para teste
        const mockUserId = '1';
        setUserId(mockUserId);
        
        // Buscar dados do usuário
        const userResponse = await userService.getProfile();
        if (userResponse.success && userResponse.user) {
          setUserData({
            name: userResponse.user.name || '',
            email: userResponse.user.email || '',
            phone: userResponse.user.phone || '',
            address: userResponse.user.address || '',
            city: userResponse.user.city || '',
            state: userResponse.user.state || '',
            profileImage: userResponse.user.profileImage || null
          });
          
          // Se o usuário for um catador, buscar dados do catador
          if (userResponse.user.role === 'catador' && userResponse.user.id) {
            const catadorResponse = await catadorService.getCatadorById(userResponse.user.id);
            
            if (catadorResponse.success && catadorResponse.catador) {
              const catador = catadorResponse.catador;
              setCatadorId(catador.id);
              
              setCatadorData({
                workingArea: catador.workingArea || [],
                collectMaterials: catador.collectMaterials || [],
                transportType: catador.transportType || '',
                experience: catador.experience || 0,
                bio: catador.bio || '',
                rating: catador.rating || 0,
                isVerified: catador.isVerified || false,
                gamificationPoints: catador.gamificationPoints || 0,
                badges: catador.badges || []
              });
            }
          }
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar dados do usuário:', err);
        setError('Não foi possível carregar seus dados. Tente novamente mais tarde.');
        setLoading(false);
        
        // Dados simulados para desenvolvimento
        setUserData({
          name: 'João Silva',
          email: 'joao.silva@example.com',
          phone: '(81) 99999-9999',
          address: 'Rua das Flores, 123',
          city: 'Recife',
          state: 'PE',
          profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
        });
        
        setCatadorData({
          workingArea: ['Recife', 'Olinda'],
          collectMaterials: ['Plástico', 'Vidro', 'Papel'],
          transportType: 'Bicicleta',
          experience: 3,
          bio: 'Catador com experiência em coleta seletiva. Trabalho com reciclagem há 3 anos.',
          rating: 4.5,
          isVerified: true,
          gamificationPoints: 350,
          badges: ['Coletor Experiente', 'Amigo do Meio Ambiente']
        });
      }
    };
    
    fetchUserData();
  }, []);

  // Função para selecionar imagem da galeria
  const pickImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria de fotos.');
        return;
      }
      
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });
      
      if (!result.canceled) {
        setLoading(true);
        const imageUri = result.assets[0].uri;
        
        // Atualizar a UI imediatamente para feedback visual
        setUserData(prev => ({
          ...prev,
          profileImage: imageUri
        }));
        
        try {
          // Fazer upload da imagem para o servidor
          if (userId) {
            const uploadResult = await userService.uploadProfileImage(imageUri);
            
            if (!uploadResult.success) {
              throw new Error('Falha ao fazer upload da imagem');
            }
            
            // Atualizar o userData com a URL da imagem retornada pelo servidor
            if (uploadResult.imageUrl) {
              setUserData(prev => ({
                ...prev,
                profileImage: uploadResult.imageUrl
              }));
            }
          }
        } catch (uploadError) {
          console.error('Erro ao fazer upload da imagem:', uploadError);
          Alert.alert('Aviso', 'A imagem foi selecionada, mas não foi possível fazer o upload para o servidor. Ela será enviada quando você salvar as alterações.');
        } finally {
          setLoading(false);
        }
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
    }
  };

  // Função para atualizar campos do usuário
  const handleUserChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Função para atualizar campos do catador
  const handleCatadorChange = (field, value) => {
    setCatadorData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Função para adicionar uma área de trabalho
  const [newWorkingArea, setNewWorkingArea] = useState('');
  
  const addWorkingArea = () => {
    if (newWorkingArea.trim() === '') return;
    
    if (!catadorData.workingArea.includes(newWorkingArea)) {
      setCatadorData(prev => ({
        ...prev,
        workingArea: [...prev.workingArea, newWorkingArea]
      }));
    }
    
    setNewWorkingArea('');
  };
  
  // Função para remover uma área de trabalho
  const removeWorkingArea = (area) => {
    setCatadorData(prev => ({
      ...prev,
      workingArea: prev.workingArea.filter(item => item !== area)
    }));
  };
  
  // Função para adicionar um material coletado
  const [newMaterial, setNewMaterial] = useState('');
  
  const addMaterial = () => {
    if (newMaterial.trim() === '') return;
    
    if (!catadorData.collectMaterials.includes(newMaterial)) {
      setCatadorData(prev => ({
        ...prev,
        collectMaterials: [...prev.collectMaterials, newMaterial]
      }));
    }
    
    setNewMaterial('');
  };
  
  // Função para remover um material coletado
  const removeMaterial = (material) => {
    setCatadorData(prev => ({
      ...prev,
      collectMaterials: prev.collectMaterials.filter(item => item !== material)
    }));
  };
  
  // Função para salvar as alterações
  const saveChanges = async () => {
    try {
      setLoading(true);
      
      // Atualizar dados do usuário
      if (userId) {
        await userService.updateProfile({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          city: userData.city,
          state: userData.state,
          // A atualização da imagem de perfil seria feita separadamente com upload
        });
      }
      
      // Atualizar dados do catador
      if (catadorId) {
        await catadorService.updateCatador(catadorId, {
          workingArea: catadorData.workingArea,
          collectMaterials: catadorData.collectMaterials,
          transportType: catadorData.transportType,
          experience: parseInt(catadorData.experience) || 0,
          bio: catadorData.bio
          // Alguns campos como rating, isVerified, gamificationPoints e badges
          // geralmente são atualizados pelo sistema, não pelo usuário
        });
      }
      
      setIsEditing(false);
      setLoading(false);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    } catch (err) {
      console.error('Erro ao salvar alterações:', err);
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível salvar as alterações. Tente novamente mais tarde.');
    }
  };

  // Carregamento de fontes
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded || loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#24bc61" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro ao carregar dados: {error}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setLoading(true)}
        >
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Meus Dados</Text>
          <Text style={styles.subtitle}>Informações do Perfil de Catador</Text>
          
          {/* Foto de perfil */}
          <View style={styles.profileImageContainer}>
            {userData.profileImage ? (
              <Image 
                source={{ uri: userData.profileImage }} 
                style={styles.profileImage} 
              />
            ) : (
              <View style={[styles.profileImage, styles.noProfileImage]}>
                <Text style={styles.profileInitials}>
                  {userData.name ? userData.name.charAt(0).toUpperCase() : '?'}
                </Text>
              </View>
            )}
            
            {isEditing && (
              <TouchableOpacity 
                style={styles.changePhotoButton} 
                onPress={pickImage}
              >
                <Text style={styles.changePhotoText}>Alterar foto</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Status de verificação */}
          {catadorData.isVerified && (
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Perfil Verificado</Text>
            </View>
          )}

          {/* Botão de edição */}
          <TouchableOpacity 
            style={styles.editButton} 
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text style={styles.editButtonText}>
              {isEditing ? 'Cancelar' : 'Editar Perfil'}
            </Text>
          </TouchableOpacity>

          {/* Dados pessoais */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dados Pessoais</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Nome</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={userData.name}
                  onChangeText={(text) => setUserData(prev => ({ ...prev, name: text }))}
                />
              ) : (
                <Text style={styles.infoText}>{userData.name}</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Email</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={userData.email}
                  onChangeText={(text) => setUserData(prev => ({ ...prev, email: text }))}
                  keyboardType="email-address"
                />
              ) : (
                <Text style={styles.infoText}>{userData.email}</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Telefone</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={userData.phone}
                  onChangeText={(text) => setUserData(prev => ({ ...prev, phone: text }))}
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.infoText}>{userData.phone}</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Endereço</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={userData.address}
                  onChangeText={(text) => setUserData(prev => ({ ...prev, address: text }))}
                />
              ) : (
                <Text style={styles.infoText}>{userData.address}</Text>
              )}
            </View>

            <View style={styles.rowContainer}>
              <View style={[styles.infoContainer, { flex: 2, marginRight: 10 }]}>
                <Text style={styles.infoLabel}>Cidade</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    value={userData.city}
                    onChangeText={(text) => setUserData(prev => ({ ...prev, city: text }))}
                  />
                ) : (
                  <Text style={styles.infoText}>{userData.city}</Text>
                )}
              </View>

              <View style={[styles.infoContainer, { flex: 1 }]}>
                <Text style={styles.infoLabel}>Estado</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    value={userData.state}
                    onChangeText={(text) => setUserData(prev => ({ ...prev, state: text }))}
                    maxLength={2}
                  />
                ) : (
                  <Text style={styles.infoText}>{userData.state}</Text>
                )}
              </View>
            </View>
          </View>

          {/* Dados de catador */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Perfil de Catador</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Áreas de Atuação</Text>
              {isEditing ? (
                <>
                  <View style={styles.tagsContainer}>
                    {catadorData.workingArea.map((area, index) => (
                      <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{area}</Text>
                        <TouchableOpacity onPress={() => removeWorkingArea(area)}>
                          <Text style={styles.tagRemove}>×</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                  <View style={styles.addItemContainer}>
                    <TextInput
                      style={styles.addItemInput}
                      value={newWorkingArea}
                      onChangeText={setNewWorkingArea}
                      placeholder="Nova área de trabalho"
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addWorkingArea}>
                      <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <View style={styles.tagsContainer}>
                  {catadorData.workingArea.map((area, index) => (
                    <View key={index} style={styles.tagReadOnly}>
                      <Text style={styles.tagText}>{area}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Materiais Coletados</Text>
              {isEditing ? (
                <>
                  <View style={styles.tagsContainer}>
                    {catadorData.collectMaterials.map((material, index) => (
                      <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{material}</Text>
                        <TouchableOpacity onPress={() => removeMaterial(material)}>
                          <Text style={styles.tagRemove}>×</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                  <View style={styles.addItemContainer}>
                    <TextInput
                      style={styles.addItemInput}
                      value={newMaterial}
                      onChangeText={setNewMaterial}
                      placeholder="Novo material coletado"
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addMaterial}>
                      <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <View style={styles.tagsContainer}>
                  {catadorData.collectMaterials.map((material, index) => (
                    <View key={index} style={styles.tagReadOnly}>
                      <Text style={styles.tagText}>{material}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Tipo de Transporte</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={catadorData.transportType}
                  onChangeText={(text) => setCatadorData(prev => ({ ...prev, transportType: text }))}
                />
              ) : (
                <Text style={styles.infoText}>{catadorData.transportType}</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Experiência (anos)</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={catadorData.experience.toString()}
                  onChangeText={(text) => setCatadorData(prev => ({ 
                    ...prev, 
                    experience: parseInt(text) || 0 
                  }))}
                  keyboardType="numeric"
                />
              ) : (
                <Text style={styles.infoText}>{catadorData.experience} anos</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Biografia</Text>
              {isEditing ? (
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={catadorData.bio}
                  onChangeText={(text) => setCatadorData(prev => ({ ...prev, bio: text }))}
                  multiline
                  numberOfLines={4}
                />
              ) : (
                <Text style={styles.infoText}>{catadorData.bio}</Text>
              )}
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Avaliação</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{catadorData.rating.toFixed(1)}</Text>
                <View style={styles.starsContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Text 
                      key={star} 
                      style={[styles.star, star <= Math.round(catadorData.rating) ? styles.filledStar : {}]}
                    >
                      ★
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Gamificação */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gamificação</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Pontos</Text>
              <Text style={styles.pointsText}>{catadorData.gamificationPoints}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Conquistas</Text>
              <View style={styles.badgesContainer}>
                {catadorData.badges.map((badge, index) => (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Botão de salvar */}
          {isEditing && (
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={saveChanges}
            >
              <Text style={styles.saveButtonText}>Salvar Alterações</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    marginBottom: 10,
    color: '#24bc61',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginBottom: 20,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#24bc61',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  noProfileImage: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 48,
    fontFamily: 'Inter_600SemiBold',
    color: '#24bc61',
  },
  changePhotoButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  changePhotoText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#24bc61',
  },
  verifiedBadge: {
    backgroundColor: '#e8f7ef',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#24bc61',
  },
  editButton: {
    backgroundColor: '#24bc61',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20,
  },
  editButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
  },
  section: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#24bc61',
    marginBottom: 15,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: '#f39c12',
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    color: '#ddd',
    marginRight: 2,
  },
  filledStar: {
    color: '#f39c12',
  },
  pointsText: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: '#24bc61',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: '#e8f7ef',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#24bc61',
  },
  saveButton: {
    backgroundColor: '#24bc61',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    textAlign: 'center',
  },
  // Estilos para os componentes de tags
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f7ef',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: '#24bc61',
  },
  tagReadOnly: {
    backgroundColor: '#e8f7ef',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#24bc61',
  },
  tagRemove: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#e74c3c',
    marginLeft: 6,
  },
  // Estilos para adicionar novos itens
  addItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  addItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#fff',
    marginRight: 8,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#24bc61',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
});