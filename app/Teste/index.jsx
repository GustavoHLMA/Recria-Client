import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Separator from '../../src/components/Separator';
import { TouchableOpacity } from 'react-native';
import { Image, SafeAreaView, ScrollView } from 'react-native';
import { LocalizaIcon, ProfilePic, chatIcon, product1, product2, product3, product4 } from '../../src/assets';
import React, { useState } from 'react';

const PageTest = () => {
  let [fontsLoaded] = useFonts({	  
    Inter_400Regular,
  });

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('minhas');

  const handleChatPress = () => {
    // lógica para abrir o chat com o vendedor
    console.log('Abrir chat com o vendedor');
  };

  const handleLocationPress = (location) => {
    setSelectedLocation(location);
  };

  const handleCancelPress = (productId) => {
    // Lógica para cancelar o produto com o ID especificado
    console.log('Cancelar produto com ID:', productId);
  };
  

  const LocationText = ({ location, isSelected, onPress }) => (
    <TouchableOpacity
      style={[
        styles.locationTextContainer,
        isSelected && styles.selectedLocationText,
      ]}
      onPress={() => onPress(location)}
    >
      <Text style={[styles.locationText, isSelected && styles.selectedText]}>
        {location}
      </Text>
    </TouchableOpacity>
  );

  const renderProductItem = (item) => (
    <View key={item.id} style={styles.productItem}>
      <Image source={item.image} style={styles.productItemImage} />
      <View style={styles.productItemDetails}>
        <Text style={styles.productItemTitle}>{item.type}</Text>
        <Text>{item.quantity}</Text>
        <Text>{item.weight}</Text>
        <Text>{item.location}</Text>
        <Text>{item.quality}</Text>
        <Text>Categoria: {item.category}</Text>
        

        {selectedLocation === 'minhas' && ( // Condição para excluir o botão de cancelar
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        )}

        {selectedLocation === 'aceitas' && (
          <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
            <Image source={chatIcon} style={styles.chatIcon} />
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        )}

       
      </View>
    </View>
  );

  const products = [
    {
      id: 1,
      seller: 'João Silva',
      type: 'Garrafas de Vidro',
      quantity: '11 unidades',
      weight: '3,3kg',
      location: 'Recife, PE',
      quality: 'Ótimo estado',
      category: 'Vidro',
      image: product1,
    },
    {
      id: 2,
      seller: 'Maria do Carmo',
      type: 'Garrafas de Vidro',
      quantity: '50 unidades',
      weight: '20kg',
      location: 'Paulista, PE',
      quality: 'Bom estado',
      category: 'Vidro',
      image: product2,
    },
    {
      id: 3,
      seller: 'Carlos Lima',
      type: 'Resíduos de vidro',
      quantity: '100 unidades',
      weight: '10kg',
      location: 'Camaragibe, PE',
      quality: 'Estilhaçado',
      category: 'Vidro',
      image: product3,
    },
    {
      id: 4,
      seller: 'Anice de Oliveira',
      type: 'Painel de vidro',
      quantity: '10 unidades',
      weight: '40kg',
      location: 'Recife, PE',
      quality: 'Ótimo estado',
      category: 'Vidro',
      image: product4,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#b8ffd4'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer}/>
      <Image
          source={require('../../src/assets/logotipo.png')} 
          style={styles.logo}
          resizeMode="contain" 
      />
          <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={LocalizaIcon} style={styles.icon} />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Ricardo!</Text>
              <Text style={styles.profileText}>DESCARTE</Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image source={ProfilePic} style={styles.profileImage} />
            </View>
          </View>
        </View>
      </View> 
      

      <View style={styles.centeredContent}>
        <Text style={styles.centeredText}>
          Bem-vindo ao nosso espaço de{'\n'}descarte de resíduos sólidos.
        </Text>
        <Text style={styles.boldText}>
          <Text style={styles.bold}>Deseja solicitar uma coleta?</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationContainer}>
        <LocationText
          location="Minhas solicitações"
          isSelected={selectedLocation === 'minhas'}
          onPress={() => handleLocationPress('minhas')}
        />
        <LocationText
          location={
            <Text>
              Solicitações {'\n'}
              aceitas
            </Text>
          }
          isSelected={selectedLocation === 'aceitas'}
          onPress={() => handleLocationPress('aceitas')}
        />
      </View>

      <ScrollView contentContainerStyle={styles.productList}>
        {products.map((product) => renderProductItem(product))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },

  backgroundCurvedContainer: {
    backgroundColor: '#b8ffd4',
    height: 2050,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  logo: {
    marginTop: 20,
    alignSelf: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 52,
    height: 52,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(16, 148, 70, 0.7)',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(16, 148, 70, 0.7)',
    marginBottom: 2,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
  },
  profileTextContainer: {
    marginRight: 10,
    marginBottom: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  profileText: {
    fontSize: 14,
    color: 'rgba(30, 30, 30, 0.38)',
    textAlign: 'left',
    marginRight: 20,
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
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: 10,
  },
  centeredText: {
    fontSize: 16,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    marginTop: 0,
    color: '#109946',
  },
  boldText: {
    fontSize: 16,
    lineHeight: 13 * 1.4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#097534',
  },
  buttonText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#58C044', 
    paddingVertical: 6,
    paddingHorizontal: 20,
    paddingBottom:4,
    paddingTop:0,
    borderRadius: 5,
    marginTop: 10,
  },
  productList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  productItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  productItemDetails: {
    flex: 1,
  },
  productItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#109946',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  locationTextContainer: {
    padding: 10,
  },
  locationText: {
    color: 'rgba(30, 30, 30, 0.38)',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  selectedLocationText: {
    color: '#109946',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(119, 104, 104, 0.34)',
    marginLeft: 10,
    marginRight: 10,
  },
  selectedText: {
    color: '#109946',
  },

  
  cancelButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '37%',
    height: 30,
    marginBottom: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 7,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
   
    elevation: 20,
  },
  cancelButtonText: {
    color: 'green',
    fontSize: 10,
    fontWeight: 'bold',
  },

  acceptButton: {
    color: 'green',
    marginTop: 5,
  },
  
  chatButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '37%',
    height: 30,
    marginBottom: 1,
    backgroundColor: '#109946',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
      paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  },
  chatIcon: {
    width: 20,
    height: 20,
    marginRight: 2,
    marginLeft: -1,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default PageTest;
