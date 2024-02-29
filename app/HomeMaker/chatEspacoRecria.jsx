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
  Alert,
  Button,
} from 'react-native';
import {useNavigation,} from 'expo-router';
import { LocalizaIcon,  
  SearchIcon, 
  chatIcon, 
  LogoSvg, 
  LocalizaSvg, 
  product1, 
  product2,
  product3,
  product4,
  CatadorPhoto,
  PicChat,
  ArtesaoPhoto,
  EspacoRecriaTest,
  Sino
} from '../../src/assets';

export default function ChatEspacoRecria() {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('venda'); // Estado para controlar a aba selecionada
  const navigation = useNavigation();

  const [productsForSale, setProductsForSale] = useState([
    {
      id: 1,
      type: 'Nome do usuário',
      quality: 'Lorem ipsum dolor sit amet consectetur.',
      image: PicChat,
      hora: '15:00',
      tipo: 'venda', // Produto para venda
    },
    {
      id: 2,
      type: 'Nome do usuário',
      quality: 'Lorem ipsum dolor sit amet consectetur.',
      image: PicChat,
      hora: '13:59',
      tipo: 'venda', // Produto para venda
    },
  ]);

  const collectionRequests = [
    {
      id: 3,
      type: 'Nome do usuário',
      quality: 'Lorem ipsum dolor sit amet consectetur.',
      image: PicChat,
      hora: '22:00',
      tipo: 'coleta', // Solicitação de coleta
    },
    {
      id: 4,
      type: 'Nome do usuário',
      location: 'Recife, PE',
      quality: 'Lorem ipsum dolor sit amet consectetur.',
      image: PicChat,
      hora: '21:00',
      tipo: 'coleta', // Solicitação de coleta
    },
  ];

  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }


  const renderButtons = ( item ) => {
    if (selectedTab === 'venda') {
      return (
        <TouchableOpacity style={styles.botaoDeletar}>

          <Text style={{
            color: '#1A9DBA',
            textAlign: 'center',
            fontFamily: 'Inter_600SemiBold',
            fontSize: 11,
            marginRight: 31,
            marginBottom: 1,
          }}>
            {item.hora}
          </Text>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: 34,
            height: 24,
            borderRadius: 60,
            backgroundColor: '#1A9DBA', 
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 20,
            }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'Inter_600SemiBold', fontSize: 14 }}>
              {item.id}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.botaoDeletar}>

          <Text style={{
            color: '#1A9DBA',
            textAlign: 'center',
            fontFamily: 'Inter_600SemiBold',
            fontSize: 11,
            marginRight: 31,
            marginBottom: 1,
          }}>
            {item.hora}
          </Text>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: 34,
            height: 24,
            borderRadius: 60,
            backgroundColor: '#1A9DBA', 
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 20,
            }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'Inter_600SemiBold', fontSize: 14 }}>
              {item.id}
            </Text>
          </View>
        </TouchableOpacity>
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
        <TouchableOpacity style={{ marginLeft: 15, paddingRight: 0 }}>
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardSeller}>{item.type}</Text>
              <Text style={styles.cardText}>{item.quality}</Text>
              {renderButtons( item )}
            </View>
          </View>
          <View 
                style={{
                  width: '100%',
                  height: 2,
                  backgroundColor: 'rgba(206, 206, 206, 0.37)',
                }}
              />
        </TouchableOpacity>
      );
    };

    const keyExtractor = (item) => item.id.toString();

    const handleCancel = (item) => {
      // Abre um pop-up/modal de confirmação
      Alert.alert(
        "Deseja cancelar a venda ou recusar a coleta?",
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

    const handleAccept = (item) => {
      // Abre um pop-up/modal de confirmação
      Alert.alert(
        "Deseja aceitar a solicitação?",
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
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', display: 'flex', }} >
      <EspacoRecriaTest width={150} height={50} style={{ alignSelf: 'center' }} />
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <LocalizaSvg />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Giorgio!</Text>
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
          placeholder="Buscar Mensagem"
          placeholderTextColor="rgba(30, 30, 30, 0.38)"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'venda' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('venda')}
        >
          <Text style={[styles.tabButtonText, selectedTab === 'venda' && styles.selectedTabButtonText]}>Descarte</Text>
          {selectedTab === 'venda' && <View style={styles.underline} /> }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'coleta' && styles.selectedTabButton]}
          onPress={() => setSelectedTab('coleta')}
        >
          <Text style={[styles.tabButtonText, selectedTab === 'coleta' && styles.selectedTabButtonText]}>Makers</Text>
          {selectedTab === 'coleta' && <View style={styles.underline} />}
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
    marginBottom: 10,
    overflow: 'hidden',
    color: '#F5F5F5',    
    /*shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,*/

  },
  cardImage: {
    width: 54,
    height: 54,
    marginTop: 10,
    marginLeft: 14,
  },
  cardInfo: {
    padding: 10,
    marginLeft: 7,
  },
  cardSeller: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: '#4D4D4D', 
  },
  cardText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    marginBottom: 3,
    color: 'rgba(77, 77, 77, 0.46)', 
    width: 162,
  },

  botaoAceitar : {
    position: 'absolute',
    width: 65,
    height: 18,
    borderRadius: 3,  
    backgroundColor: '#58C044',
    color: '#fff',
    marginLeft: 160,
    bottom: 40,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3,  },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 20,
  },

  botaoRecusarDeletar : {
    position: 'absolute',
    width: 65,
    height: 18,
    borderWidth: 1, 
    borderColor: '#109946',
    borderRadius: 3,  
    backgroundColor: '#fff',
    marginLeft: 160,
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
    marginLeft: 250,
    bottom: 40,
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
