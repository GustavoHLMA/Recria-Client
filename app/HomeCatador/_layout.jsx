import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, useNavigation } from 'expo-router';
import { HomeIcon, DadosIcon, ChatIcon, MarketplaceIcon } from '../../src/assets';

export default function RootLayoutaa() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("home");

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
            <TouchableOpacity style={[styles.tabIcon, activeTab === "home" && styles.activeTab]} onPress={() => { setActiveTab("home"); navigation.navigate("home"); }}>
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
            <TouchableOpacity style={[styles.tabIcon, activeTab === "chat" && styles.activeTab]} onPress={() => { setActiveTab("chat"); navigation.navigate("chat"); }}>
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
            <TouchableOpacity style={[styles.tabIcon, activeTab === "dados" && styles.activeTab]} onPress={() => { setActiveTab("dados"); navigation.navigate("dados"); }}>
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
            <TouchableOpacity style={[styles.tabIcon, activeTab === "marketplace" && styles.activeTab]} onPress={() => { setActiveTab("marketplace"); navigation.navigate("marketplace"); }}>
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
