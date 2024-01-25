import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import HomeDescarte from './src/screens/home-teste';
import ProfileScreen from './src/screens/profile';
import Chat from './src/screens/chat';
import Graficos from './src/screens/graficos';
import EspacoRecria from './src/screens/espaco-recria';

const Tab = createBottomTabNavigator();

const App = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: colors.primary, // Cor do item ativo
          inactiveTintColor: 'gray', // Cor do item inativo
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeDescarte}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./src/assets/icon-home.png')}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./src/assets/icon-profile.png')}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./src/assets/icon-chat.png')}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Gráfico"
          component={Graficos}
          options={{
            tabBarLabel: 'Gráfico',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./src/assets/icon-graficos.png')}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Loja"
          component={EspacoRecria}
          options={{
            tabBarLabel: 'Loja',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./src/assets/icon-espaco-recria.png')}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
