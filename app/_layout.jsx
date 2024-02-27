import { Stack } from 'expo-router/stack';

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={
        {
          headerShown: false,
        }
      } />

      <Stack.Screen name="HomeCatador" options={
        {
          headerShown: false,
        }
      } />

      <Stack.Screen name="HomeMaker/index" options={
        {
          headerShown: false,
          
        }
      } />
      <Stack.Screen name="HomeDescarte" options={
        {
          headerShown: false,
        }
      } />
      
    </Stack>
  )
}
