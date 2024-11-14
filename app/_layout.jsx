import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'

SplashScreen.preventAutoHideAsync();
const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
  "SUSE-Bold": require("../assets/fonts/SUSE-Bold.ttf"),
   "SUSE-Light": require("../assets/fonts/SUSE-Light.ttf"),
   "SUSE-Regular": require("../assets/fonts/SUSE-Regular.ttf"),
 
});

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null;
}


  return (
  
  <Stack>
    <Stack.Screen name="index" options={{
      headerShown:false
    }}/>
    
  </Stack>
  )
}

export default MainLayout

