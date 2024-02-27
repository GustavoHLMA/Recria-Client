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

import { LocalizaIcon, 
  SearchIcon, 
  EspacoRegriaPng,
  CatadorPhoto,
  Upcycle1, 
  Upcycle2,
  Upcycle3,
  Upcycle4,
} from '../../src/assets';
import { LinearGradient } from 'expo-linear-gradient';

export default function MarketplaceCatador() {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('venda'); // Estado para controlar a aba selecionada

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

  const productsForSale = [
    {
      id: 1,
      type: 'Garrafas de Vidro',
      price: '15',
      image: Upcycle1,
    },
    {
      id: 2,
      type: 'Garrafas de Vidro',
      price: '15',
      image: Upcycle2,
    },

    {
      id: 3,
      type: 'Garrafas de Vidro',
      price: '15',
      image: Upcycle3,
    },

    {
      id: 4,
      type: 'Garrafas de Vidro',
      price: '15',
      image: Upcycle4,
    },

  ];

  const renderButtons = () => {
      return (
        <TouchableOpacity style={styles.botaoComprar}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 13 }}>Comprar</Text>
        </TouchableOpacity>
      );
    } 

  const renderProducts = () => {
      return (
        <FlatList
          data={productsForSale}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={1}
        />
      );
    } 

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginLeft: 15, paddingRight: 0 }}>
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardProduct}>{item.type}</Text>
              <Text style={styles.cardPrice}>{item.price} $</Text>
              {renderButtons()}
            </View>
          </View>
        </View>
      );
    };

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', display: 'flex', marginBottom: 56, }} >
      <Image source={EspacoRegriaPng} style={{ alignSelf: 'center' }} />
      <LinearGradient 
        colors={['#1fb4d5', '#b9d1f6']}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flexDirection: 'column', width: 337, height: 215 , borderRadius: 26, alignSelf: 'center', marginTop: 19, paddingRight: 0,
      }}
        >
        <View style={{
          flexDirection: 'row',
          paddingTop: 15,
        }}> 
          <View style={styles.profileImageContainer}>
            <Image source={CatadorPhoto} style={styles.profileImage} />
          </View>
          <Text style={{
              width: 189,
              marginTop: 20,
              fontFamily: 'Inter_800ExtraBold',
              lineHeight: 'normal',
              fontSize: 16,
              color: '#fff',
              textAlign: 'left',
            }}>
              Olá, me chamo Ricardo! Seja muito bem-vindo ao Espaço Recria!
            </Text>
        </View>
        <View style={{
          width: 339,
          height: 1,
          backgroundColor: '#fff',
          marginTop: 9,
        }}
        />
        <Text style={{
            marginTop: 3,
            marginLeft: 35,
            marginRight: 35,
            fontFamily: 'Inter_500Medium',
            lineHeight: 'normal',
            alignSelf: 'center',
            fontSize: 15,
            color: '#fff',
            }}>
          Tenho uma lojinha de souvenirs feitos de materiais reciclados.
          Comprando meu trabalho você ajuda a movimentar a economia.
        </Text>


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
          {selectedTab === 'venda' && <View style={styles.underline} /> }
        </TouchableOpacity>
      </View>

      {renderProducts()}
      
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
    fontFamily: 'Inter_600SemiBold',
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
    shadowOffset: { width: 0, height: 3,  },
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
    marginBottom: 25,
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

  botaoAceitar : {
    position: 'absolute',
    width: 57,
    height: 18,
    borderRadius: 3,  
    backgroundColor: '#38b4d0',
    color: '#fff',
    marginLeft: 170,
    bottom: 40,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

  botaoRecusarDeletar : {
    position: 'absolute',
    width: 57,
    height: 18,
    borderWidth: 1, 
    borderColor: '#109946',
    borderRadius: 3,  
    backgroundColor: '#fff',
    marginLeft: 170,
    bottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

  botaoComprar : {
    position: 'absolute',
    width: 69,
    height: 18,
    backgroundColor: '#38b4d0',
    borderRadius: 3,  
    marginLeft: 160,
    bottom: 60,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

});
