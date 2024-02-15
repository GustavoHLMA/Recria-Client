import React, { useState } from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { LocalizaIcon, 
  ProfilePic, 
  SearchIcon, 
  chatIcon, 
  LogoSvg, 
  LocalizaSvg, 
  CatadorPhoto,
  product1, 
  product2,
  product3,
  product4,

} from '../../src/assets';

export default function Catador() {
  const [searchText, setSearchText] = useState('');  
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10, paddingRight: 0 }}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardSeller}>{item.type}</Text>
            <Text style={styles.cardText}>{item.type} </Text>
            <Text style={styles.cardText}>{item.quantity} {item.weight}</Text>
            <Text style={styles.cardText}>{item.location}</Text>
            <Text style={styles.cardText}>{item.quality}</Text>
            <Text style={styles.cardText}>Categoria: {item.category}</Text>
          </View>
          <TouchableOpacity onPress={null}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.id.toString();



  const products = [
    {
      id: 1,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', display: 'flex', }} >
      <LogoSvg width={150} height={50} style={{
        alignSelf: 'center',
      }} />
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <LocalizaSvg />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Davi!</Text>
              <Text style={styles.profileText}>Catador</Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image source={CatadorPhoto} style={styles.profileImage} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar produto ou catregoria"
          placeholderTextColor="rgba(30, 30, 30, 0.38)"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={1}
      />


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
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
    marginLeft: 10,
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: 370,
    height: 45,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E1E1E',
  },
  categoriesText: {
    color: '#B0D9C1',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    marginLeft: 18,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    marginTop: 13,
  },
  selectedCategoryButton: {
    backgroundColor: '#109946',
  },
  categoryButtonText: {
    color: '#109946',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectCategoryText: {
    color: 'white',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: 'auto',
    marginLeft: -7,
    marginRight: -5,
    overflow: 'hidden',
    color: '#F5F5F5',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
      
  },
  cardImage: {
    width: '30%',
    height: 100,
    marginTop: 10,
    marginLeft: 14,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 10,
    marginLeft: 7,
  },
  cardSeller: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#109946', 
  },
  cardText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    marginBottom: 3,
    color: '#109946', 
    lineHeight: 12,
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
  productList: {
    justifyContent: 'space-between',
  },
  columnWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
});
