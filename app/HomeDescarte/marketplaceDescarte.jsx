import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { categories, foodItems } from '../../src/constants';
import * as Animatable from 'react-native-animatable';
import FoodCard from '../../src/components/FoodCard';
import { LinearGradient } from 'expo-linear-gradient';
import { LocalizaSvg, ProfilePic,SearchIcon, chatIcon, product1, product2, product3, product4, EspacoRecriaTest, camIcon

} from '../../src/assets';
import { Link, useNavigation } from 'expo-router';

const DescarteMarket = () => {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('Burger');
  const [selectedLocation, setSelectedLocation] = useState('descubra');
  const navigation = useNavigation();

  const handleLocationPress = (location) => {
    setSelectedLocation(location);
  };


  const LocationText = ({ location, isSelected, onPress }) => (
    <TouchableOpacity
      style={[
        styles.locationTextContainer,
        isSelected && styles.selectedLocationText,
      ]}
      onPress={
        onPress
      }

    
    >
      <Text style={[styles.locationText, isSelected && styles.selectedText]}>
        {location}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         
        </View>
      

      <View/>
      <EspacoRecriaTest width={150} height={70} preserveAspectRatio="none" style={{ alignSelf: 'center' }} />
          <View style={styles.container}>
        <View style={styles.leftContainer}>
          <LocalizaSvg />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Ricardo!</Text>
              <Text style={styles.profileText}>COMPRADOR</Text>
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
          placeholder="Buscar produto/negócio"
          placeholderTextColor="rgba(30, 30, 30, 0.38)"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

        <LinearGradient colors={['#58C044', '#25A3A5']}
          style={{ 
            borderRadius: 15, 
            padding: 30, 
            marginVertical: 15,
            flexDirection: 'row', // Define a direção do gradiente como horizontal
            justifyContent: 'flex-start', // Alinha o gradiente à esquerda
            alignItems: 'center' // Alinha os itens verticalmente ao centro
          }}
          start={{ x: 0, y: 0 }} // Define o ponto de partida do gradiente (esquerda)
          end={{ x: 1, y: 0 }}   // Define o ponto de término do gradiente (direita)
        >
        
          <Text style={{ color: 'white' }}>Conheça agora os incríveis produtos criados a partir dos materiais que você disponibilizou e colabore ainda mais com nossa comunidade de makers.</Text>
        </LinearGradient>

        <View style={styles.locationContainer}>
        <LocationText
          location="Descubra"
          isSelected={selectedLocation === 'Descubra'}
          onPress={() => handleLocationPress('descubra')}
        />
       
      </View>

        

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ 
          paddingHorizontal: 20,
          }}>
          {foodItems.map((item, index) => <FoodCard item={item} index={index} key={index} />)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 0,
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

  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    
  },
  locationTextContainer: {
    padding: 10,
    
  },
  locationText: {
    color: '#109946',
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

export default DescarteMarket;
