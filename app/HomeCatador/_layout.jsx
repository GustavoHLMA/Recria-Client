import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, useNavigation } from 'expo-router';
import { HomeIcon, DadosIcon, ChatIcon, MarketplaceIcon } from '../../src/assets';

export default function RootLayoutaa() {
  const navigation = useNavigation();

  return (
    <Tabs 
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 30,
          height: 55,
          borderRadius: 20,
          backgroundColor: '#24bc61',
          overflow: 'hidden',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={styles.tabIcon} onPress={() => navigation.navigate("home")}>
              <HomeIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={styles.tabIcon} onPress={() => navigation.navigate("chat")}>
              <ChatIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="dados"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={styles.tabIcon} onPress={() => navigation.navigate("dados")}>
              <DadosIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="marketplace"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={styles.tabIcon} onPress={() => navigation.navigate("marketplace")}>
              <MarketplaceIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    backgroundColor: '#109946',
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  tabIcon: {
    padding: 25,
  },
});
