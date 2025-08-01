import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function DadosDescarte() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Meus Dados</Text>
          <Text style={styles.subtitle}>Informações do Perfil de Descarte</Text>
          
          {/* Aqui você pode adicionar os componentes para exibir e editar os dados do usuário */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Esta página está em desenvolvimento</Text>
            <Text style={styles.infoText}>Em breve você poderá visualizar e editar seus dados de descarte aqui.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#24bc61',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});