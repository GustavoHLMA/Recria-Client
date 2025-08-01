import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { leftArrow, camIcon, VideoIcon } from '../../src/assets';
import { apiService } from '../../src/services/api'; // Import apiService

const VenderResiduo = ({ navigation }) => {
  const { control, handleSubmit, formState } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Send waste data to the backend
      const wasteData = {
        title: data.titulo,
        contact: data.contato,
        category: data.categoria,
        address: data.endereco,
        cep: data.cep,
        uf: data.uf,
        state: data.estado, // Assuming 'estado' is the state field
        city: data.cidade, // Assuming 'cidade' is the city field
        description: data.descricao, // Assuming 'descricao' is the description field
        // Add other fields as needed based on your Waste model
      };

      const response = await apiService.post('/waste', wasteData);
      console.log('Waste created successfully:', response);

      // Upload images if any are selected
      for (const imageUri of selectedImages) {
        const filename = imageUri.split('/').pop(); // Extract filename from URI
        await apiService.uploadImage(`/wastes/${response.waste.id}/upload-image`, imageUri, filename); // Pass URI and filename
      }

      Alert.alert('Sucesso', 'Solicitação de descarte enviada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Error submitting waste request:', error);
      Alert.alert('Erro', 'Houve um erro ao enviar a solicitação de descarte. Tente novamente.');
    }
  };

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const openImagePicker = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
      allowsMultipleSelection: true, // Allow multiple image selection
      quality: 1, // High quality
    };

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('A permissão para acessar a galeria é necessária!');
      return;
    }

    const response = await ImagePicker.launchImageLibraryAsync(options);

    if (response.canceled) { // Use 'canceled' instead of 'cancelled'
      console.log('Seleção cancelada');
    } else if (response.error) {
      console.error('Erro ao selecionar imagem:', response.error);
    } else {
      // Add new selected images to the existing ones
      setSelectedImages((prevImages) => [...prevImages, ...response.assets.map(asset => asset.uri)]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, height: '100%', backgroundColor: 'white', marginBottom: 60}}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, marginRight: 10 }}>
          <TouchableOpacity onPress={handleVoltarPress} style={{ padding: 10 }}>
            <Image source={leftArrow} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'column' }}>
          <Text style={{ color: '#109946', fontSize: 26, fontWeight: '700' }}>Informações</Text>
          <Text style={{ color: '#109946', fontSize: 26, fontWeight: '700' }}>sobre o resíduo</Text>
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
                    placeholder="Escreva aqui o nome do tipo de resíduo"
                    onChangeText={field.onChange}
                    value={field.value}
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
                  <Text style={styles.label}>Contato</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="(XX) XXXXX-XXXX"
                      onChangeText={field.onChange}
                      value={field.value}
                      keyboardType="phone-pad"
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
                  <Text style={styles.label}>Categoria</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="Selecionar"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  </View>
                </View>
              )}
              name="categoria"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>

          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Endereço</Text>
                <View style={styles.customInput}>
                  <TextInput
                    {...field}
                    style={styles.input}
                    placeholder="XXXXXXXXXXX"
                    onChangeText={field.onChange}
                    value={field.value}
                  />
                </View>
              </View>
            )}
            name="endereco"
            rules={{ required: 'Campo obrigatório' }}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>CEP</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="xxxxx-xxx"
                      onChangeText={field.onChange}
                      value={field.value}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              )}
              name="cep"
              rules={{ required: 'Campo obrigatório' }}
            />

            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>UF</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="xx"
                      onChangeText={field.onChange}
                      value={field.value}
                      maxLength={2}
                    />
                  </View>
                </View>
              )}
              name="uf"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>Estado</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="xxxxxxxx"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  </View>
                </View>
              )}
              name="estado" // Changed name from 'cep' to 'estado'
              rules={{ required: 'Campo obrigatório' }}
            />

            <Controller
              control={control}
              render={({ field }) => (
                <View style={[styles.inputContainer, { width: '48%' }]}>
                  <Text style={styles.label}>Cidade</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="xxxxxxxx"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  </View>
                </View>
              )}
              name="cidade"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>

          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição</Text>
                <View style={styles.customInput}>
                  <TextInput
                    {...field}
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Descreva o resíduo, quantidade, estado de conservação, etc."
                    multiline={true}
                    onChangeText={field.onChange}
                    value={field.value}
                  />
                </View>
              </View>
            )}
            name="descricao"
            rules={{ required: 'Campo obrigatório' }}
          />

          <Text style={styles.label}>Fotos do Resíduo</Text>
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity onPress={openImagePicker} style={styles.imagePickerButton}>
              <Image source={camIcon} style={{ width: 30, height: 30, tintColor: '#109946' }} />
              <Text style={styles.imagePickerButtonText}>Adicionar Fotos</Text>
            </TouchableOpacity>
            <View style={styles.selectedImagesContainer}>
              {selectedImages.map((imageUri, index) => (
                <Image key={index} source={{ uri: imageUri }} style={styles.selectedImage} />
              ))}
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Solicitar Descarte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  customInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  imagePickerContainer: {
    marginBottom: 20,
  },
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0ffe0',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  imagePickerButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#109946',
    fontWeight: 'bold',
  },
  selectedImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  selectedImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  submitButton: {
    backgroundColor: '#109946',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VenderResiduo;
