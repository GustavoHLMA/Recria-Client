import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, useNavigation } from 'expo-router';
import { HomeIcon, DadosIcon, ChatIcon, MarketplaceIcon } from '../../src/assets';

export default function RootLayoutaa() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("homeDescarte");

  return (
    <Tabs 
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 30,
          marginTop: 30,
          paddingBottom: 30,
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
        name="homeDescarte"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "homeDescarte" && styles.activeTab]} onPress={
              () => { setActiveTab("homeDescarte"); navigation.navigate("homeDescarte"); }}>
              <HomeIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="chatDescarte"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "chatDescarte" && styles.activeTab]} onPress={
              () => { setActiveTab("chatDescarte"); navigation.navigate("chatDescarte"); }}>
              <ChatIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="dadosDescarte"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "dadosDescarte" && styles.activeTab]} onPress={
              () => { setActiveTab("dadosDescarte"); navigation.navigate("dadosDescarte"); }}>
              <DadosIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="marketplaceDescarte"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "marketplaceDescarte" && styles.activeTab]} onPress={
              () => { setActiveTab("marketplaceDescarte"); navigation.navigate("marketplaceDescarte"); }}>
              <MarketplaceIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen 
        name="makerProdutos"
        options={{
          href: null,
          headerShown: false
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