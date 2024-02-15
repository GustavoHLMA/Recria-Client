import { Tabs } from 'expo-router'

export default function RootLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" options={
        {
          headerShown: false,
        }
      } />

      <Tabs.Screen name="dados" options={
        {
          headerShown: false,
        }
      } />

    </Tabs>
  )
}