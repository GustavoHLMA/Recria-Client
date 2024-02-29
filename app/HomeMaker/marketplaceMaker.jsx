import React, { useState } from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
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

import {
  LocalizaIcon,
  SearchIcon,
  EspacoRegriaPng,
  CatadorPhoto,
  Upcycle1,
  Upcycle2,
  Upcycle3,
  Upcycle4,
  ArtesaoPhoto,
  ChatEspacoRecria,
  NegocioEspacoRecria,
  PublicarEspacoRecria,
  Vassoura,
  EspacoRecriaTest,
  StarSvg
} from '../../src/assets';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';

export default function EspacoRecria() {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('negocio');
  const [productsForSale, setProductsForSale] = useState([
    {
      id: 1,
      type: 'Vassoura Pet',
      price: '20,00',
      image: Vassoura,
      rating: 5,
    },
    {
      id: 2,
      type: 'Pote de Vidro',
      price: '5,99',
      image: Upcycle1,
      rating: 5,
    },
    {
      id: 3,
      type: 'Casa para aves',
      price: '5,99',
      image: Upcycle2,
      rating: 5,
    },
    {
      id: 4,
      type: 'Cadeira de guitarra',
      price: '119,00',
      image: Upcycle3,
      rating: 5,
    },
    {
      id: 5,
      type: 'Vaso de rolhas',
      price: '5,99',
      image: Upcycle4,
      rating: 5,
    }
  ]);
  const navigator = useNavigation();

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleCancel = (itemToDelete) => {
    const updatedProducts = productsForSale.filter(item => item.id !== itemToDelete.id);
    setProductsForSale(updatedProducts);
  };

  const handleAccept = (item) => {
    // Implement your logic to accept the item here
  };

  const renderButtons = (item) => {
    return (
      <View>
        <TouchableOpacity style={styles.botaoAceitar} onPress={() => handleAccept(item)}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Em falta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoRecusarDeletar} onPress={() => handleCancel(item)}>
          <Text style={{ color: '#1A9DBA', textAlign: 'center' }}>Deletar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginLeft: 15, paddingRight: 0 }}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardProduct}>{item.type}</Text>
            <Text style={styles.cardPrice}>${item.price}</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Text style={styles.cardPrice}>{item.rating} </Text>
              <StarSvg width={15} height={15} />
            </View>
            {renderButtons(item)}
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <EspacoRecriaTest width={200} height={60} style={{ alignSelf: 'center' }} />
      <LinearGradient
        colors={['#1fb4d5', '#b9d1f6']}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={ArtesaoPhoto} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.welcomeText}>
              Olá, Giorgio! Seja muito bem vindo ao espaço recria
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => navigator.navigate('marketplaceMaker')}>
            <NegocioEspacoRecria width={50} height={44} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigator.navigate('chatEspacoRecria')}>
            <ChatEspacoRecria width={50} height={50} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigator.navigate('anuncioProduto')}>
            <PublicarEspacoRecria width={50} height={50} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar produto ou categoria"
          placeholderTextColor="rgba(30, 30, 30, 0.38)"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'produtos' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('venda')}
        >
          <Text style={[styles.tabButtonText, selectedTab === 'venda' && styles.selectedTabButtonText]}>Produtos a venda</Text>
          {selectedTab === 'venda' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
      <FlatList
        data={productsForSale}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 43,
  },
  gradient: {
    flexDirection: 'column',
    width: 337,
    height: 215,
    borderRadius: 26,
    alignSelf: 'center',
    marginTop: 19,
    paddingRight: 0,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 9999,
    marginLeft: 20,
    marginRight: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#58C044',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileTextContainer: {
    width: 189,
    marginTop: 25,
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 2,
  },
  divider: {
    width: 339,
    height: 1,
    backgroundColor: '#fff',
    marginTop: 9,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginTop: 25,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: 370,
    height: 45,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
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
  tabButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 31,
    marginBottom: 5,
    marginLeft: 20,
  },
  tabButton: {
    color: '#38b4d0',
  },
  tabButtonText: {
    display: 'flex',
    color: '#38b4d0',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    alignSelf: 'flex-end',
    lineHeight: 16,
  },
  selectedTabButtonText: {
    color: '#38b4d0',
  },
  underline: {
    marginTop: 1,
    width: 'auto',
    height: 2,
    backgroundColor: '#c3d6cb',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: 'auto',
    marginLeft: -7,
    marginRight: -5,
    marginBottom: 20,
    overflow: 'hidden',
    color: '#F5F5F5',
  },
  cardImage: {
    width: 90,
    height: 80,
    marginTop: 10,
    marginLeft: 14,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 10,
    marginLeft: 7,
  },
  cardProduct: {
    fontFamily: 'Inter_700Bold',
    fontSize: 15,
    marginBottom: 2,
    color: '#38b4d0',
  },
  cardPrice: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    marginBottom: 2,
    color: '#38b4d0',
  },
  botaoAceitar: {
    position: 'absolute',
    width: 57,
    height: 18,
    borderRadius: 3,
    backgroundColor: '#38b4d0',
    color: '#fff',
    marginLeft: 170,
    bottom: 0,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },
  botaoRecusarDeletar: {
    position: 'absolute',
    width: 57,
    height: 18,
    borderWidth: 1,
    borderColor: '#1A9DBA',
    borderRadius: 3,
    backgroundColor: '#fff',
    marginLeft: 170,
    bottom: 25,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },
});
