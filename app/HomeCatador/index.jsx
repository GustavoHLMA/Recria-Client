import React, { useState } from 'react';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Tabs } from 'expo-router/tabs';
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
  product1, 
  product2, 
  product3, 
  product4, 
  LogoSvg, 
  LocalizaSvg, 
  CatadorPhoto,
} from '../../src/assets';


export default function Catador() {
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
  });

  const [searchText, setSearchText] = useState('');  
  
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
    width: 200,
    height: 300,
    marginBottom: -10,
    marginLeft: -7,
    marginRight: -5,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    color: '#F5F5F5',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
      
  },
  cardImage: {
    width: '86%',
    height: 150,
    marginTop: 10,
    marginLeft: 14,
    borderRadius: 10,
  },
  cardInfo: {
    padding: 10,
    marginLeft: 7,
  },
  cardSeller: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#109946', 
  },
  cardText: {
    fontSize: 11,
    marginBottom: 3,
    color: '#4D4D4D', 
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
