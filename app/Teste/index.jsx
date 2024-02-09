import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Separator from '../../src/components/Separator';

const PageTest = () => {
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#0A8791'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Ionicons
            name="location-outline"
            size={15}
            color={'#FFFFFF'}
          />
         
          <Text style={styles.selectedLocationText}>HOMaaE</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={16}
            color={'#0A8791'}
          />
          <Feather
            name="bell"
            size={24}
            color={'#FFFFFF'}
            style={{position: 'absolute', right: 0}}
          />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
      
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <Ionicons
              name="search-outline"
              size={25}
              color={'#0A8791'}
            />
            <Text style={styles.searchText}>Search..</Text>
          </View>
          <Feather
            name="sliders"
            size={20}
            color={'#FBA83C'}
            style={{marginRight: 10}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter_400Regular',
  },
  backgroundCurvedContainer: {
    backgroundColor: '#0A8791',
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },

  headerContainer: {
    justifyContent: 'space-evenly',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  locationText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    
  },
  selectedLocationText: {
    color: '#FBA83C',
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    
  },
  alertBadge: {
    borderRadius: 32,
    backgroundColor: '#FBA83C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    position: 'absolute',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 10 * 1.4,
    
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchText: {
    color: '#C2C2CB',
    fontSize: 16,
    lineHeight: 16 * 1.4,
   
    marginLeft: 10,
  },
});
export default PageTest;