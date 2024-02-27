import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ScrollView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos de permissões de acesso à câmera e à galeria para fazer isso funcionar!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Selecionar imagens da galeria" onPress={pickImage} />
      <ScrollView horizontal>
        {images.map((imageUri, index) => (
          <Image key={index} source={{ uri: imageUri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },
});
