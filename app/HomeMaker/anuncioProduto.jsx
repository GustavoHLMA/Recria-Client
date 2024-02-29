import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { leftArrow, camIcon, VideoIcon, EspacoRecriaTest, ArtesaoPhoto} from '../../src/assets';

const SolicitarColeta = ({ navigation }) => {
  const { control, handleSubmit, formState } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(selectedImages);
    // Adicione aqui a lógica para enviar os dados do formulário e as imagens selecionadas
  };

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const openImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('A permissão para acessar a galeria é necessária!');
      return;
    }

    const response = await ImagePicker.launchImageLibraryAsync(options);

    if (response.cancelled) {
      console.log('Seleção cancelada');
    } else if (response.error) {
      console.error('Erro ao selecionar imagem:', response.error);
    } else {
      setSelectedImages([...selectedImages, response.uri]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, height: '100%', backgroundColor: 'white'}}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, marginRight: 10 }}>
        </View>

        <View style={{ marginTop: 20, flexDirection: 'column' }}>
          <Text style={{ color: '#1A9DBA', fontSize: 20, fontWeight: '600', alignSelf: 'center' }}>Publicar</Text>
          <View style={{
            flexDirection: 'row',
            marginTop: 30,
        }}>
            <EspacoRecriaTest 
              width={120}
              height={60}
              preserveAspectRatio="none"
              alignSelf="flexStart"
              marginLeft={26}    
              marginRight={60}          
            />
            <View style={{
              flexDirection: 'row',
            }}>
              <View style={{
                flexDirection: 'column',
                marginTop: 15,
                marginRight: 15,
                }}>
                <Text style={{
                  color: 'rgba(16, 153, 70, 0.70)',
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                  Olá Giorgio
                </Text>
                <Text style={{
                  color: 'rgba(30, 30, 30, 0.38)',
                  fontWeight: '600',
                  fontSize: 12,
                  letterSpacing: 2.8,
                }}>
                  Maker
                </Text>
              </View>
              <View style={styles.profileImageContainer}>
                <Image source={ArtesaoPhoto} style={styles.profileImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ 
          padding: 16,
          }}>
          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Título</Text>
                <View style={styles.customInput}>
                  <TextInput
                    {...field}
                    style={styles.input}
                    placeholder="Escreva aqui o nome do produto"
                  />
                </View>
              </View>
            )}
            name="titulo"
            rules={{ required: 'Campo obrigatório' }}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>Categoria</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="Categoria produto"
                    />
                  </View>
                </View>
              )}
              name="contato"
              rules={{ required: 'Campo obrigatório' }}
            />

            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>Preço (R$)</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="XX,XX"
                    />
                  </View>
                </View>
              )}
              name="preço"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>
          <View style={styles.imageLabelContainer}>
            <Text style={styles.imageLabel}>Fotos</Text>
            <Text style={styles.imageSubtitle}>Adicione até 5 fotos</Text>
          </View>
          <TouchableOpacity onPress={openImagePicker} style={styles.imagePickerButton}>
            <Image source={camIcon} style={styles.camIcon} />
            <Text style={styles.addPhotosText}>Adicionar fotos</Text>
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {selectedImages.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.selectedImage} />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} disabled={formState.isSubmitting}>
            <Text style={styles.buttonText}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#4D4D4D',
    marginBottom: 8,
    marginLeft: 13,
    fontWeight: '500',
  },
  customInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  },
  input: {
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#1A9DBA',
    borderRadius: 3,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginLeft: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  imageLabelContainer: {
    alignItems: 'flex-start',
    marginLeft: 16,
  },
  imageLabel: {
    fontSize: 18,
    color: '#4D4D4D',
    marginBottom: 4,
    fontWeight: '400',
  },
  imageSubtitle: {
    fontSize: 14,
    color: '#4D4D4D',
    marginBottom: 8,
  },
  imagePickerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 146,
    height: 121,
    marginTop: 16,
    marginLeft: 16,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  },
  camIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    alignItems: 'center',
  },
  addPhotosText: {
    color: '#4D4D4D',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
  },
  selectedImage: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#58C044',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },

});

export default SolicitarColeta;
