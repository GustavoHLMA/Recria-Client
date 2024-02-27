import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ProgressoScreen = () => {
  const [progressoResiduos, setProgressoResiduos] = useState(20);
  const [progressoProdutos, setProgressoProdutos] = useState(50);
  const [pontosProdutosDescartados, setPontosProdutosDescartados] = useState(10);
  const [pontosProdutosComprados, setPontosProdutosComprados] = useState(30);

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
       
        {recompensas.map((recompensa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.rewardItem}
            onPress={() => selecionarRecompensa(recompensa)}
          >
            <FontAwesome5 name="award" size={24} color="#FFD700" />
            <View style={styles.rewardTextContainer}>
              <Text style={styles.rewardTitle}>{recompensa.nome}</Text>
              <Text style={styles.rewardDescription}>{recompensa.descricao}</Text>
              <Text style={styles.rewardPoints}>{recompensa.pontos} pontos</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 20,
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
    fontSize: 16,
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
