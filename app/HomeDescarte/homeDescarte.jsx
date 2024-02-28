import React, { useState } from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Platform,
  Alert // Importar Alert do React Native
} from 'react-native';

import { LocalizaIcon, 
  ProfilePic, 
  LogoSvg, 
  LocalizaSvg, 
  product1, 
  product2,
  product3,
  product4,
  ChatSvg
} from '../../src/assets';
import { Link, useNavigation } from 'expo-router';

export default function Catador() {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('venda'); // Estado para controlar a aba selecionada
  navigator = useNavigation();

  const [productsForSale, setProductsForSale] = useState([
    {
      id: 1,
      type: 'Garrafas de Vidro',
      quantity: '11 unidades',
      weight: '3,3kg',
      location: 'Recife, PE',
      quality: 'Ótimo estado',
      category: 'Vidro',
      image: product1,
      tipo: 'venda', // Produto para venda
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
      tipo: 'venda', // Produto para venda
    },
  ]);

  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  
  const collectionRequests = [
    {
      id: 3,
      type: 'Resíduos de vidro',
      quantity: '100 unidades',
      weight: '10kg',
      location: 'Camaragibe, PE',
      quality: 'Estilhaçado',
      category: 'Vidro',
      image: product3,
      tipo: 'coleta', // Solicitação de coleta
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
      tipo: 'coleta', // Solicitação de coleta
    },
  ];

  const renderButtons = (item) => {
    if (selectedTab === 'venda') {
      return (
        <TouchableOpacity style={styles.botaoDeletar} onPress={() => handleCancel(item)}>
          <Text style={{ color: '#109946', textAlign: 'center' }}>Cancelar</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          <TouchableOpacity style={styles.chatStyles} onPress={() => navigator.navigate('chatDescarte')}>
            <ChatSvg/>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderProducts = () => {
    if (selectedTab === 'venda') {
      return (
        <FlatList
          data={productsForSale}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={1}
        />
      );
    } else {
      return (
        <FlatList
          data={collectionRequests}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={1}
        />
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginLeft: 15, paddingRight: 0 }}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardSeller}>{item.type}</Text>
            <Text style={styles.cardText}>{item.quantity} {item.weight}</Text>
            <Text style={styles.cardText}>{item.location}</Text>
            <Text style={styles.cardText}>{item.quality}</Text>
            <Text style={styles.cardText}>Categoria: {item.category}</Text>
            {renderButtons(item)}
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.id.toString();

  const handleCancel = (item) => {
    // Abre um pop-up/modal de confirmação
    Alert.alert(
      "Deseja cancelar a solicitação?",
      "",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => deleteRequest(item) }
      ],
      { cancelable: false }
    );
  };

  const deleteRequest = (item) => {
    // Remove o item da lista
    const updatedProducts = productsForSale.filter(product => product.id !== item.id);
    setProductsForSale(updatedProducts);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#B8FFD4'}}>
      <View style={{ flex: 1, backgroundColor: 'white', display: 'flex', }} >
        <SafeAreaView>
          <View style={{
            backgroundColor: '#B8FFD4',
            paddingBottom: 30,
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
          }}>
            <LogoSvg width={150} height={50} style={{ alignSelf: 'center' }} />
            <View style={styles.container}>
              <View style={styles.leftContainer}>
                <LocalizaSvg />
                <Text style={styles.text}>Recife, PE</Text>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.profileContainer}>
                  <View style={styles.profileTextContainer}>
                    <Text style={styles.welcomeText}>Olá, Davi!</Text>
                    <Text style={styles.profileText}>Descarte</Text>  
                  </View>
                  <View style={styles.profileImageContainer}>
                    <Image source={ProfilePic} style={styles.profileImage} />
                  </View>
                </View>
              </View>
            </View>

            <Text style={{
              alignSelf: 'center',
              color: '#109946',
              width: 251,
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              textAlign: 'center',
              marginTop: 27,
            }}>
              Bem-vindo ao nosso espaço de descarte de resíduos sólidos. Deseja solicitar uma coleta?
            </Text>
            <TouchableOpacity
              style={{  
                width: 100,
                height: 30,
                borderRadius: 3,
                backgroundColor: '#58C044',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 14,
                }}
              >
                Solicitar!
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>  

        <View style={styles.tabButtons}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'venda' && styles.selectedTabButton]}
            onPress={() => setSelectedTab('venda')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'venda' && styles.selectedTabButtonText]}>Minhas solicitações</Text>
            {selectedTab === 'venda' && <View style={styles.underline} /> }
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'coleta' && styles.selectedTabButton]}
            onPress={() => setSelectedTab('coleta')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'coleta' && styles.selectedTabButtonText]}>Solicitações aceitas</Text>
            {selectedTab === 'coleta' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>

        {renderProducts()}
        
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
    justifyContent: 'space-around',
    marginTop: 31,
    marginBottom: 25,
  },
  tabButton: {
    color: '#A3A3A3',
  },
  tabButtonText: {
    display: 'flex',
    color: '#A3A3A3',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    alignSelf: 'flex-end',
    lineHeight: 16,
  },
  selectedTabButtonText: {
    color: '#109946',
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

  botaoAceitar : {
    position: 'absolute',
    width: 57,
    height: 18,
    borderRadius: 3,  
    backgroundColor: '#58C044',
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

  botaoDeletar : {
    position: 'absolute',
    width: 65,
    height: 18,
    borderWidth: 1, 
    borderColor: '#109946',
    borderRadius: 3,  
    backgroundColor: '#fff',
    marginLeft: 170,
    bottom: 50,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

  chatStyles : {
    position: 'absolute',
    width: 57,
    height: 18,
    marginLeft: 170,
    bottom: 50,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

  backgroundCurvedContainer: {
    backgroundColor: '#B8FFD4',
    height: 2050,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },  

});
