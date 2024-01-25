import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';


const HomeDescarte = () => {
  const [myRequests, setMyRequests] = useState([
    { id: '1', type: 'Garrafas de vidro', quantity: '11 unidades, 3,3kg', location: 'Recife, PE', status: 'Ótimo estado' },
    { id: '2', type: 'Garrafas de vidro', quantity: '50 unidades, 20kg', location: 'Recife, PE', status: 'Bom estado' },
    { id: '3', type: 'Resíduos de vidro', quantity: '10kg', location: 'Recife, PE', status: 'Estilhaçado' },
    { id: '4', type: 'Painel de vidro', quantity: '10 unidades, 40kg', location: 'Recife, PE', status: 'Ótimo estado' },
    { id: '4', type: 'Painel de vidro', quantity: '10 unidades, 40kg', location: 'Recife, PE', status: 'Ótimo estado' },
  ]);

  const [acceptedRequests, setAcceptedRequests] = useState([
    // Adicione dados para as solicitações aceitas, se houver
  ]);

  const handleCancelRequest = (id, isMyRequest) => {
    const updatedRequests = isMyRequest
      ? myRequests.filter(request => request.id !== id)
      : acceptedRequests.filter(request => request.id !== id);

    isMyRequest ? setMyRequests(updatedRequests) : setAcceptedRequests(updatedRequests);

    Alert.alert('Solicitação cancelada com sucesso!');
  };

  const renderRequestItem = (item, isMyRequest) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.type}</Text>
      <Text>{item.quantity}</Text>
      <Text>{item.location}</Text>
      <Text>{item.status}</Text>
      <TouchableOpacity onPress={() => handleCancelRequest(item.id, isMyRequest)}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.header}>Minhas solicitações</Text>
        {myRequests.length > 0 ? (
          <FlatList
            data={myRequests}
            renderItem={({ item }) => renderRequestItem(item, true)}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>Nenhuma solicitação encontrada.</Text>
        )}
      </View>

      <View style={styles.column}>
        <Text style={styles.header}>Solicitações aceitas</Text>
        {acceptedRequests.length > 0 ? (
          <FlatList
            data={acceptedRequests}
            renderItem={({ item }) => renderRequestItem(item, false)}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>Nenhuma solicitação aceita encontrada.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 100, // Adicionando margem superior
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeDescarte;



