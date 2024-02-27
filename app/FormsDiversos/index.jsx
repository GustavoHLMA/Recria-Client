import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { leftArrow, camIcon } from '../../src/assets';

const FormGen = ({ navigation }) => {
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
    <ScrollView style={{ flexGrow: 1, height: 'auto' }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, marginRight: 10 }}>
          <TouchableOpacity onPress={handleVoltarPress}>
            <Image
              source={leftArrow}
              style={{ width: 20, height: 20, marginLeft: 10, tintColor: '#109946' }}
            />
          </TouchableOpacity>

          <Text style={{ color: '#109946', fontSize: 18, marginLeft: 130, marginTop: 5, fontWeight: '600' }}>Anúncio</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'column' }}>
          <Text style={{ color: '#109946', fontSize: 26, fontWeight: '700' }}>Informações</Text>
          <Text style={{ color: '#109946', fontSize: 26, fontWeight: '700' }}>sobre o resíduo</Text>
        </View>

        <View style={{ padding: 16 }}>
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
                  <Text style={styles.label}>Cidade</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={styles.input}
                      placeholder="xxxxxx"
                    />
                  </View>
                </View>
              )}
              name="uf"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>

          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição do resíduo</Text>
                <View style={styles.customInput}>
                  <TextInput
                    {...field}
                    style={styles.input}
                    placeholder="Quantidade, peso e estado de qualidade"
                  />
                </View>
              </View>
            )}
            name="descricaoResiduo"
            rules={{ required: 'Campo obrigatório' }}
          />

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

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} disabled={formState.isSubmitting}>
            <Text style={styles.buttonText}>Anunciar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.verifyButton} onPress={() => console.log('Verificar selo de qualidade')}>
            <Text style={styles.verifyButtonText}>Verificar selo{'\n'}de qualidade</Text>
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
    fontSize: 18,
    color: '#4D4D4D',
    marginBottom: 8,
    marginLeft: 13,
    fontWeight: '400',
  },
  customInput: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(30, 30, 30, 0.1)',
    borderRadius: 60,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
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
    backgroundColor: '#58C044',
    padding: 12,
    borderRadius: 60,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.1)',
    padding: 12,
    borderRadius: 8,
    width: 200,
    height: 170,
    marginTop: 16,
    marginLeft: 16,
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
  verifyButton: {
    backgroundColor: 'white',
    borderColor: '#58C044',
    borderWidth: 2,
    padding: 12,
    borderRadius: 60,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    marginTop: 20,
  },
  verifyButtonText: {
    color: '#58C044',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center', 
    lineHeight: 20, 
  },
});

export default FormGen;
