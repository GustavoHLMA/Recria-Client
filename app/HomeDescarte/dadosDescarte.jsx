import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackedBarChart, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import { LocalizaIcon, ProfilePic } from '../../src/assets';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChartScreen = () => {
  const data = [
    {
      month: 'Jan',
      Vidro: 10,
      Plástico: 5,
      Papel: 20,
    },
    {
      month: 'Feb',
      Vidro: 10,
      Plástico: 10,
      Papel: 20,
    },
    // Adicione os dados para os outros meses...
  ];

  const colors = ['#109946', '#1A9DBA', '#00FFA3'];
  const keys = ['Vidro', 'Plástico', 'Papel'];

  const contentInset = { top: 20, bottom: 20 };

  const renderCustomBarLabel = ({ x, y, width, height, value }) => {
    return (
      <View style={{ position: 'absolute', left: x + width / 2, top: y - 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 12, color: 'black' }}>{value}</Text>
      </View>
    );
  };

  const renderCategoryTotal = () => {
    return (
      <View style={styles.categoryTotalContainer}>
        {keys.map((key, index) => (
          <View key={index} style={styles.categoryTotalItem}>
            <Text style={styles.categoryName}>{key}</Text>
            <View style={[styles.categoryValueContainer, { backgroundColor: colors[index] }]}>
              <Text style={styles.categoryValueText}>
                {data.reduce((acc, cur) => acc + cur[key], 0)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  // Dados de exemplo para o gráfico de linha
  const lineChartData = [10, 15, 8, 12, 18, 10, 16];

  return (
    <SafeAreaView style={{ flex: 1 }}>


    <Text style={styles.TituloText}>Progresso</Text>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={LocalizaIcon} style={styles.icon} />
          <Text style={styles.text}>Recife, PE</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.welcomeText}>Olá, Ricardo!</Text>
              <Text style={styles.profileText}>DESCARTE</Text>
            </View>
            <View style={styles.profileImageContainer}>
              <Image source={ProfilePic} style={styles.profileImage} />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Quantidade de resíduos descartados</Text>
      {renderCategoryTotal()}
      <View style={styles.chartContainer}>
        <YAxis
          data={data}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          contentInset={contentInset}
          spacingInner={0.2}
          formatLabel={(value, index) => data[index].month}
        />
        <View style={{ flex: 1 }}>
          <StackedBarChart
            style={{ flex: 1 }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={contentInset}
            horizontal={true}
            renderDecorator={renderCustomBarLabel}
          />
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => keys.reduce((acc, cur) => acc + data[index][cur], 0)}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View>
      </View>
      <View style={styles.lineChartContainer}>
        <Text style={styles.titleSegundoGrafico}>Quantidade de produtos {'\n'} comprados no espaço recria</Text>
        <LineChart
          style={{ height: 200, width: '90%' }}
          data={lineChartData}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },
  TituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#109946',
    textAlign: 'center'
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom:15,
    color: '#A3A3A3',
    textAlign: 'center',
  },

  titleSegundoGrafico: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#A3A3A3',
    textAlign: 'center',
  },

  chartContainer: {
    flexDirection: 'row',
    height: 200,
    width: '90%',
    padding: 10,
  },
  categoryTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
    marginLeft: 20,
  },
  categoryTotalItem: {
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  categoryValueContainer: {
    borderRadius: 12,
    padding: 6,
  },
  categoryValueText: {
    fontSize: 14,
    color: 'white',
  },
  lineChartContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ChartScreen;
