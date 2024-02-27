import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, useNavigation } from 'expo-router';
import { HomeIcon, DadosIcon, ChatIcon, MarketplaceIcon } from '../../src/assets';

export default function RootLayoutaa() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("homeCatador");

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
        name="homeCatador"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "homeCatador" && styles.activeTab]} onPress={
              () => { setActiveTab("homeCatador"); navigation.navigate("homeCatador"); }}>
              <HomeIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="chatCatador"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "chatCatador" && styles.activeTab]} onPress={
              () => { setActiveTab("chatCatador"); navigation.navigate("chatCatador"); }}>
              <ChatIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="dadosCatador"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "dadosCatador" && styles.activeTab]} onPress={
              () => { setActiveTab("dadosCatador"); navigation.navigate("dadosCatador"); }}>
              <DadosIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="marketplaceCatador"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "marketplaceCatador" && styles.activeTab]} onPress={
              () => { setActiveTab("marketplaceCatador"); navigation.navigate("marketplaceCatador"); }}>
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
  tabIcon: {
    paddingBottom: 30,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
});
