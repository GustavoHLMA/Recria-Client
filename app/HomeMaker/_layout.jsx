import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, useNavigation } from 'expo-router';
import { HomeIcon, DadosIcon, ChatIcon, MarketplaceIcon } from '../../src/assets';

export default function RootLayoutaa() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("homeMaker");

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
        name="homeMaker"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "homeMaker" && styles.activeTab]} onPress={
              () => { setActiveTab("homeMaker"); navigation.navigate("homeMaker"); }}>
              <HomeIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="chatMaker"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "chatMaker" && styles.activeTab]} onPress={
              () => { setActiveTab("chatMaker"); navigation.navigate("chatMaker"); }}>
              <ChatIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="dadosMaker"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "dadosMaker" && styles.activeTab]} onPress={
              () => { setActiveTab("dadosMaker"); navigation.navigate("dadosMaker"); }}>
              <DadosIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="marketplaceMaker"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.tabIcon, activeTab === "marketplaceMaker" && styles.activeTab]} onPress={
              () => { setActiveTab("marketplaceMaker"); navigation.navigate("marketplaceMaker"); }}>
              <MarketplaceIcon />
            </TouchableOpacity>
          ),
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name="anuncioProduto"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="chatEspacoRecria"
        options={{
          href: null,
          headerShown: false,
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
