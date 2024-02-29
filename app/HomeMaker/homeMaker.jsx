import React, { useState } from 'react';
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
import { useNavigation } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';


import { LocalizaSvg, ProfilePic, SearchIcon, chatIcon, product1, product2, product3, product4, CatadorPhoto, ArtesaoPhoto } from '../../src/assets';

const ProfileHeader = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('proximos');
  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }


  const handleChatPress = () => {
    navigation.navigate('chatMaker');
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleLocationPress = (location) => {
    setSelectedLocation(location);
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

  const renderItem = ({ item }) => {
    if (selectedCategory && !item.type.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return null; // Não renderizar o item se não corresponder à categoria selecionada
    }
    return (
      <View>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardSeller}>{item.seller}</Text>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.quantity}</Text>
            <Text style={styles.cardText}>{item.weight}</Text>
            <Text style={styles.cardText}>{item.location}</Text>
            <Text style={styles.cardText}>{item.quality}</Text>
          </View>
          <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
            <Image source={chatIcon} style={styles.chatIcon} />
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
      seller: 'João Silva',
      type: 'Garrafas de Vidro',
      quantity: '11 unidades',
      weight: '3,3kg',
      location: 'Recife, PE',
      quality: 'Ótimo estado',
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
      image: product4,
    },
    {
      id: 5,
      seller: 'Anice de Oliveira',
      type: 'Garrafas de plástico',
      quantity: '12 unidades',
      weight: '1kg',
      location: 'Recife, PE',
      quality: 'Ótimo estado',
      image: product4,
    },

  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <LocalizaSvg />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Giorgio!</Text>
              <Text style={styles.profileText}>Maker</Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image source={ArtesaoPhoto} style={styles.profileImage} />
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

      <View style={styles.locationContainer}>
        <LocationText
          location="Próximos à você"
          isSelected={selectedLocation === 'proximos'}
          onPress={() => handleLocationPress('proximos')}
        />
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.productList}
      />
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
    fontFamily: 'Inter_600SemiBold',
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
    fontFamily: 'Inter_600SemiBold',
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
    flex: 1,
    width: 185,
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    color: '#F5F5F5',
    elevation: 20,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
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
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 5,
    color: '#109946', 
  },
  cardText: {
    fontSize: 11,
    marginBottom: 3,
    color: '#4D4D4D', 
    fontFamily: 'Inter_500Medium',
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
    shadowColor: 'rgba(0, 0, 0, 0.25)',
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
  productList: {},
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

export default ProfileHeader;
