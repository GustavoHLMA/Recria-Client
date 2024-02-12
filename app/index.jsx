import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { LocalizaIcon } from '../src/assets';
import { ProfilePic } from '../src/assets';
import { SearchIcon } from '../src/assets';
import { product1 } from '../src/assets';
import { chatIcon } from '../src/assets';


const ProfileHeader = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const ProductCard = () => {
    const handleChatPress = () => {
      // Implemente a lógica para abrir o chat com o vendedor aqui
      console.log('Abrir chat com o vendedor');
    };

    return (
      <ScrollView>
        <SafeAreaView style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <View style={styles.card}>
            <Image source={product1} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardSeller}>João Silva</Text>
              <Text style={styles.cardText}>Garrafas de Vidro</Text>
              <Text style={styles.cardText}>11 unidades</Text>
              <Text style={styles.cardText}>3,3kg</Text>
              <Text style={styles.cardText}>Recife, PE</Text>
              <Text style={styles.cardText}>Ótimo estado</Text>
            </View>
            <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
              <Image source={chatIcon} style={styles.chatIcon} />
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image source={product1} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardSeller}>João Silva</Text>
              <Text style={styles.cardText}>Garrafas de Vidro</Text>
              <Text style={styles.cardText}>11 unidades</Text>
              <Text style={styles.cardText}>3,3kg</Text>
              <Text style={styles.cardText}>Recife, PE</Text>
              <Text style={styles.cardText}>Ótimo estado</Text>
            </View>
            <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
              <Image source={chatIcon} style={styles.chatIcon} />
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        
        </SafeAreaView>
      </ScrollView>
      
    );
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Restante do código */}
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={LocalizaIcon} style={styles.icon} />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Ricardo!</Text>
              <Text style={styles.profileText}>MAKER</Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image source={ProfilePic} style={styles.profileImage} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar produto"
          placeholderTextColor="rgba(30, 30, 30, 0.38)"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <Text style={styles.categoriesText}>Categorias populares</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === 'Vidro' && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategoryPress('Vidro')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Vidro' && styles.selectCategoryText]}>Vidro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === 'Plástico' && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategoryPress('Plástico')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Plástico' && styles.selectCategoryText]}>Plástico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === 'Papelão' && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategoryPress('Papelão')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Papelão' && styles.selectCategoryText]}>Papelão</Text>
        </TouchableOpacity>
      </View>
      <ProductCard />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
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
    backgroundColor: '#F4F4F4',
    width: 370,
    height: 45,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
    marginLeft: 20,
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
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    height: '95%',
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 18,
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
    width: '84%',
    height: 150,
    marginTop: 20,
    marginLeft: 20,
  },
  cardInfo: {
    padding: 10,
    marginLeft: 13,
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
});

export default ProfileHeader;