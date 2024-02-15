import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {  useFonts, Inter_900Black, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import { Container, TitleContainer, UserButton, NextButton, NextButtonText } from './style';
import { PrevArrowPng } from '../../src/assets';
import { NextArrowSvg } from '../../src/assets';
import { Link } from 'expo-router'

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
        setNextPage('/Descartar');
        break;
      default:
        setNextPage(null);
        break;
    }
  };

  return (
    <Container>
      <TitleContainer style={{
        marginTop: 44,
        marginBottom: 30,
        fontSize: 24,
      }}>
        Cadastre-se
      </TitleContainer>    
      <Text style={{
        color: '#4D4D4D',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        marginBottom: 14,
      }}>
        Como podemos te ajudar?
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: activeButtonIndex === 0 ? '#58C044' : '#fff',
          borderRadius: 60,
          borderWidth: 1,
          borderColor: activeButtonIndex === 0 ? 'transparent' : '#4D4D4D',
          paddingVertical: 7,
          paddingHorizontal: 16,
          marginBottom: 14,
          width: 280,
          height: 34,
        }}
        onPress={() => handleButtonPress(0)}
      >
        <Text style={{ 
          color: activeButtonIndex === 0 ? '#fff' : '#4D4D4D',
          fontFamily: 'Inter_500Medium',
        }}>Quero comprar resíduos sólidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: activeButtonIndex === 1 ? '#58C044' : '#fff',
          borderRadius: 60,
          borderWidth: 1,
          borderColor: activeButtonIndex === 1 ? 'transparent' : '#4D4D4D',
          paddingVertical: 7,
          paddingHorizontal: 16,
          marginBottom: 14,
          width: 280,
          height: 34,
        }}
        onPress={() => handleButtonPress(1)}
      >
        <Text style={{ 
          color: activeButtonIndex === 1 ? '#fff' : '#4D4D4D',
          fontFamily: 'Inter_500Medium',
        }}>Quero vender resíduos sólidos </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: activeButtonIndex === 2 ? '#58C044' : '#fff',
          borderRadius: 60,
          borderWidth: 1,
          borderColor: activeButtonIndex === 2 ? 'transparent' : '#4D4D4D',
          paddingVertical: 7,
          paddingHorizontal: 16,
          marginBottom: 60,
          width: 280,
          height: 34,
        }}
        onPress={() => handleButtonPress(2)}
      >
        <Text style={{ 
          color: activeButtonIndex === 2 ? '#fff' : '#4D4D4D',
          fontFamily: 'Inter_500Medium',
        }}>Quero descartar resíduos sólidos  </Text>
      </TouchableOpacity>

      {nextPage && (
        <Link href={nextPage} asChild>
          <TouchableOpacity style={{
            alignSelf: 'flex-end',
            marginRight: 20,
          }}>
            <NextButton
              colors={['#58C044', '#7bc3d4']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                borderRadius: 60,
                width: 124,
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',    
              }}
            >
              <NextButtonText style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                marginLeft: 20,
              }}>
                Próximo
              </NextButtonText>
              <NextArrowSvg style={{
                marginRight: 18,
                marginLeft: 6,
              }} />
            </NextButton>
          </TouchableOpacity>
        </Link>
      )}
    </Container>
  );
}
