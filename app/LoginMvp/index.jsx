import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import { PrevArrowPng } from '../../src/assets';
import { NextArrowSvg } from '../../src/assets';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold, Inter_500Medium, Inter_900Black
  });

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const handleButtonPress = (index) => {
    setActiveButtonIndex(index);
    switch (index) {
      case 0:
        setNextPage('/HomeMaker');
        break;
      case 1:
        setNextPage('/HomeCatador');
        break;
      case 2:
        setNextPage('/HomeDescarte');
        break;
      default:
        setNextPage(null);
        break;
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Como podemos te ajudar?</Text>

      <TouchableOpacity
        style={[styles.button, activeButtonIndex === 0 && styles.buttonActive]}
        onPress={() => handleButtonPress(0)}
      >
        <Text style={[styles.buttonText, activeButtonIndex === 0 && styles.buttonTextActive]}>
          Sou <Text style={[styles.boldText, activeButtonIndex === 0 && styles.boldTextActive]}>Artesão</Text> e quero comprar resíduos sólidos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activeButtonIndex === 1 && styles.buttonActive]}
        onPress={() => handleButtonPress(1)}
      >
        <Text style={[styles.buttonText, activeButtonIndex === 1 && styles.buttonTextActive]}>
          Sou <Text style={[styles.boldText, activeButtonIndex === 1 && styles.boldTextActive]}>Catador</Text> e quero coletar/vender resíduos sólidos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activeButtonIndex === 2 && styles.buttonActive]}
        onPress={() => handleButtonPress(2)}
      >
        <Text style={[styles.buttonText, activeButtonIndex === 2 && styles.buttonTextActive]}>
          Quero <Text style={[styles.boldText, activeButtonIndex === 2 && styles.boldTextActive]}>Descartar</Text> resíduos sólidos
        </Text>
      </TouchableOpacity>

      {nextPage && (
        <Link href={nextPage} asChild>
          <TouchableOpacity style={styles.nextButtonWrapper}>
            <LinearGradient
              colors={['#58C044', '#7bc3d4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>Próximo</Text>
              <NextArrowSvg style={styles.nextArrow} />
            </LinearGradient>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingLeft: 34,
    height: '100%',
  },
  title: {
    marginTop: 44,
    marginBottom: 30,
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#109946',
  },
  subtitle: {
    color: '#4D4D4D',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#4D4D4D',
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginBottom: 14,
    width: 325,
    height: 50,
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: '#58C044',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#4D4D4D',
    fontFamily: 'Inter_500Medium',
  },
  buttonTextActive: {
    color: '#fff',
  },
  boldText: {
    fontFamily: 'Inter_900Black',
    color: '#58C044',
  },
  boldTextActive: {
    color: '#fff',
  },
  nextButtonWrapper: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  nextButton: {
    borderRadius: 60,
    width: 124,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    marginLeft: 20,
    color: '#fff',
  },
  nextArrow: {
    marginRight: 18,
    marginLeft: 6,
  },
});
