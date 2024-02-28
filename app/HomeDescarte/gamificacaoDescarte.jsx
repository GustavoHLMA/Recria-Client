import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { MesGratis, RecriaPremio, EspacoRecriaTest, PontosGame, TrophySvg} from '../../src/assets';


const GamificacaoScreen = () => {
  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  
  
  const renderCirculosDescartados = () => {
    const circulosPreenchidos = 1;
    const circulosVazios = 6 - circulosPreenchidos;

    let circulos = [];

    for (let i = 0; i < circulosPreenchidos; i++) {
      circulos.push(<View style={{
        borderRadius: 999,
        backgroundColor: '#58C044',
        marginRight: 10,
      }}><FontAwesome5 key={i} name="circle" size={20} color="#58C044" fill="#58C044" /></View>);
    }

    for (let i = 0; i < circulosVazios; i++) {
      circulos.push(<View style={{
        borderRadius: 999,
        backgroundColor: '#D9D9D9',
        marginRight: 10,
      }}><FontAwesome5 key={i} name="circle" size={20} color="#D9D9D9" fill="#58C044" /></View>);
    }

    return circulos;
  };

  const renderCirculosComprados = () => {
    const circulosPreenchidos = 1;
    const circulosVazios = 6 - circulosPreenchidos;

    let circulos = [];

    for (let i = 0; i < circulosPreenchidos; i++) {
      circulos.push(<View style={{
        borderRadius: 999,
        backgroundColor: '#58C044',
        marginRight: 10,
      }}><FontAwesome5 key={i} name="circle" size={20} color="#58C044" fill="#58C044" /></View>);
    }

    for (let i = 0; i < circulosVazios; i++) {
      circulos.push(<View style={{
        borderRadius: 999,
        backgroundColor: '#D9D9D9',
        marginRight: 10,
      }}><FontAwesome5 key={i} name="circle" size={20} color="#D9D9D9" fill="#58C044" /></View>);
    }

    return circulos;
  };

  if (!fontsLoaded) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progresso e conquistas</Text>
        <TrophySvg/>
      </View>
      <View style={styles.progress}>
        <View style={[styles.progressLabelContainer, styles.residuosTitle]}>
          <Text style={styles.progressLabel}>Resíduos descartados</Text>
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressCircleContainer}>
            <PontosGame style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
              marginRight: 15,
            }} />
            {renderCirculosDescartados()}
          </View>
        </View>
        <View style={[styles.progressLabelContainer, styles.residuosTitle]}>
          <Text style={styles.progressLabel}>Produtos comprados</Text>
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressCircleContainer}>
          <PontosGame style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
              marginRight: 15,
            }} />
            {renderCirculosComprados()}
          </View>
        </View>
      </View>

      <View style={styles.totalPointsContainer}>
        <View style={{
              backgroundColor: '#109946',
              marginRight: 140,
              marginLeft: -30,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              padding: 5,
              paddingLeft: 35,
              width: 200,
              height: 35,
              justifyContent: 'center',
              alignText: 'center',
        }}>
          <Text style={[styles.totalPointsLabel]}>Seus pontos: <Text style={{
            color: '#9febcf',
            fontFamily: 'Inter_700Bold',
            fontSize: 20,
          }}>40</Text></Text>
        </View>
      </View>
      
      <View style={styles.rewards}>
        <View style={{
          width: 166,
          height: 152,
          flexShrink: 0,
          borderRadius: 10,
          border: '1px solid #E0E0E0',
          backgroundColor: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 10,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          }),
        }}>
          <RecriaPremio />
          <MesGratis />
          <Text style={{
            color: 'rgba(30, 30, 30, 0.38)',
            marginTop: 10,


          }}>
            Assinatura Premium {"\n"}
            500 pontos
          </Text>
          <TouchableOpacity style={{
            width: 65,
            height: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: '#1A9DBA',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 75,
          }}>
            <Text style={{
              color: '#1A9DBA',
              fontSize: 10,
              textAlign: 'center',
              fontFamily: 'Inter_600SemiBold',
            }}>
              Trocar
            </Text>
          </TouchableOpacity>
        </View>       

        <View style={{
          width: 166,
          height: 152,
          flexShrink: 0,
          borderRadius: 10,
          border: '1px solid #E0E0E0',
          backgroundColor: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 10,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          }),
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
            <EspacoRecriaTest />
            <Text style={{
              color: '#1A9DBA',
              fontSize: 24,
              fontFamily: 'Inter_600SemiBold',
              marginTop: 10,
            }}>
              10%
            </Text>
          </View>
          <Text style={{
            color: 'rgba(30, 30, 30, 0.38)',
            marginTop: 10,


          }}>
            Desconto nos produtos {"\n"}
            200 pontos
          </Text>
          <TouchableOpacity style={{
            width: 65,
            height: 20,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: '#1A9DBA',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 21,
            marginLeft: 75,
          }}>
            <Text style={{
              color: '#1A9DBA',
              fontSize: 10,
              textAlign: 'center',
              fontFamily: 'Inter_600SemiBold',
            }}>
              Trocar
            </Text>
          </TouchableOpacity>

        </View>       

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#1A9DBA',
    marginRight: 20,
  },
  trophy: {
    width: 50,
    height: 50,
  },
  progress: {
    marginTop: 20,
  },
  progressItem: {
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  progressLabelContainer: {
    marginBottom: 5,
  },
  progressLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Inter_600SemiBold',
  },
  residuosTitle: {
    backgroundColor: '#1A9DBA',
    marginRight: 140,
    marginLeft: -30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    paddingLeft: 35,
    height: 35,
    justifyContent: 'center',
  },
  pontosTitle: {
    backgroundColor: '#1A9DBA ',
    marginRight: 10,
    marginLeft: -30,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 35
   
  },
  progressValue: {
    fontSize: 18,
  },
  progressPoints: {
    fontSize: 16,
    marginLeft: 5,
  },
  totalPointsContainer: {
    flexDirection: 'row',
    
    marginTop: 20,
  },
  totalPointsLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Inter_600SemiBold',
  },
  
  totalPointsValue: {
    fontSize: 20
  
  },
  progressCircleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewards: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardsLabel: {
    
    color: '#109946',
    fontSize: 18,
    fontWeight: 'bold',
   
    marginBottom: 20
  },
  rewardItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  rewardTextContainer: {
    marginLeft: 10,
  },
  rewardTitle: {
    fontSize: 18,
  },
  rewardDescription: {
    fontSize: 16,
    color: '#666',
  },
  rewardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(16, 148, 70, 0.7)'
  },
});

export default GamificacaoScreen;
