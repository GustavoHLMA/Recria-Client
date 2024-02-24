import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

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

  const colors = ['#7b4173', '#a55194', '#ce6dbd'];
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
            <Text style={styles.categoryValue}>
              {data.reduce((acc, cur) => acc + cur[key], 0)}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Gráfico</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  },
  categoryTotalItem: {
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryValue: {
    fontSize: 14,
  },
});

export default ChartScreen;