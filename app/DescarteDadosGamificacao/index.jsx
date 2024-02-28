import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { MesGratis, RecriaPremio, EspacoRecriaTest } from '../../src/assets';


const ProgressoScreen = () => {
  const [progressoResiduos, setProgressoResiduos] = useState(20);
  const [progressoProdutos, setProgressoProdutos] = useState(50);
  const [pontosProdutosDescartados, setPontosProdutosDescartados] = useState(10);
  const [pontosProdutosComprados, setPontosProdutosComprados] = useState(30);

  let [fontsLoaded] = useFonts({	
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  
  
  const renderCirculosDescartados = () => {
    const circulosPreenchidos = Math.floor((progressoResiduos / 100) * 6);
    const circulosVazios = 6 - circulosPreenchidos;

    let circulos = [];

    for (let i = 0; i < circulosPreenchidos; i++) {
      circulos.push(<FontAwesome5 key={i} name="circle" size={20} color="#FF6347" />);
    }

    for (let i = 0; i < circulosVazios; i++) {
      circulos.push(<FontAwesome5 key={circulosPreenchidos + i} name="circle" size={20} color="#ccc" />);
    }

    return circulos;
  };

  const renderCirculosComprados = () => {
    const circulosPreenchidos = Math.floor((progressoProdutos / 100) * 6);
    const circulosVazios = 6 - circulosPreenchidos;

    let circulos = [];

    for (let i = 0; i < circulosPreenchidos; i++) {
      circulos.push(<FontAwesome5 key={i} name="circle" size={20} color="#FF6347" />);
    }

    for (let i = 0; i < circulosVazios; i++) {
      circulos.push(<FontAwesome5 key={circulosPreenchidos + i} name="circle" size={20} color="#ccc" />);
    }

    return circulos;
  };

  const [recompensas, setRecompensas] = useState([
    { nome: 'Recria+', descricao: '10% de espaço extra', pontos: 500 },
    { nome: 'PIX - R$ 100', descricao: 'Fazemos um PIX de R$ 100 para a sua conta!', pontos: 12000 }
  ]);

  const selecionarRecompensa = (recompensa) => {
    console.log(`Recompensa selecionada: ${recompensa.nome}`);
  }

  if (!fontsLoaded) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progresso e conquistas</Text>
        <Image style={styles.trophy} source={require('../../src/assets/Vector.png')} />
      </View>
      <View style={styles.progress}>
        <View style={[styles.progressLabelContainer, styles.residuosTitle]}>
          <Text style={styles.progressLabel}>Resíduos descartados</Text>
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressCircleContainer}>
            {renderCirculosDescartados()}
            <Text style={styles.progressPoints}>{pontosProdutosDescartados} pontos</Text>
          </View>
        </View>
        <View style={[styles.progressLabelContainer, styles.residuosTitle]}>
          <Text style={styles.progressLabel}>Produtos comprados</Text>
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressCircleContainer}>
            {renderCirculosComprados()}
            <Text style={styles.progressPoints}>{pontosProdutosComprados} pontos</Text>
          </View>
        </View>
      </View>

      <View style={styles.totalPointsContainer}>
        <View style={[styles.progressLabelContainer, styles.pontosTitle]}>
          <Text style={[styles.totalPointsLabel]}>Seus pontos</Text>
        </View>
        <Text style={styles.totalPointsValue}>{pontosProdutosDescartados + pontosProdutosComprados}</Text>
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
            width: 57,
            height: 14,
            borderRadius: 3,
            border: '10px solid #1A9DBA',
            borderWidth: 1,
          }}>
            <Text>
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
    marginTop: 20
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
    borderWidth: 1,
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
    borderRadius: 20,
    padding: 5,
    paddingLeft: 35
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
    fontSize: 16,
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

export default ProgressoScreen;
