import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Separator from '../../src/components/Separator';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';


const PageTest = () => {
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#b8ffd4'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer}/>

      <View style={styles.centeredContent}>
         <Image
          source={require('../../assets/logotipo.png')} 
          style={styles.logo}
          resizeMode="contain" 
          />
          <Text style={styles.centeredText}>
            Bem-vindo ao nosso espaço de{'\n'}descarte de resíduos sólidos.
          </Text>
          <Text style={styles.boldText}>
          <Text style={styles.bold}>Deseja solicitar uma coleta?</Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Solicitar</Text>
          </TouchableOpacity>
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
    backgroundColor: '#b8ffd4',
    height: 2050,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },

  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 550,
    marginLeft: 10,
    
  },
  
  centeredText: {
    fontSize: 16,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#109946'
   
  },
   boldText: {
    fontSize: 16,
    lineHeight: 13 * 1.4,
    
  },

  bold: {
    fontWeight: 'bold',
    color: '#097534'
  },

  buttonText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#58C044', 
    paddingVertical: 6,
    paddingHorizontal: 20,
    paddingBottom:4,
    paddingTop:0,
    borderRadius: 5,
    marginTop: 10,
  },
  logo: {
    marginBottom: 20,
  }
});
export default PageTest;
