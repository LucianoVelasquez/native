// Una carpeta con paréntesis `(nombre)` en Expo Router se utiliza para agrupar rutas
// relacionadas sin afectar la estructura de la URL. Esto es útil para organizar
// el código o aplicar un layout específico a un conjunto de pantallas
// sin añadir un segmento extra a la ruta visible por el usuario.
// Por ejemplo, las rutas dentro de `(stack)` como `home.tsx` serán accesibles
// directamente como `/home` en lugar de `/stack/home`.

import React from 'react';
import { Stack, useNavigation } from 'expo-router';
import { Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
  // Este componente definirá la navegación de tipo Stack para las rutas
  // dentro del grupo (stack).
  
  const navigation = useNavigation();
 
  const toggleHeaderLeft = () => {
    // Aquí puedes implementar la lógica para abrir o cerrar el Drawer
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <Stack screenOptions={{
      headerBackVisible: true,
      headerLeft: ({canGoBack}) => (canGoBack ? null : <Ionicons name="menu" size={24} color="black" onPress={() => toggleHeaderLeft()} />), 
      
    }}>
      {/* Aquí puedes configurar las pantallas que pertenecerán a este Stack Navigator */}
      <Stack.Screen name="home/index" options={{ title: 'Home',headerTitleAlign: 'center', animation: 'ios_from_right'}} />
      <Stack.Screen name="profile/index" options={{ title: 'Profile',headerTitleAlign: 'center', animation: 'ios_from_right'}} />
      <Stack.Screen name="setting/index" options={{ title: 'Setting',headerTitleAlign: 'center', animation: 'ios_from_right'}} />
      <Stack.Screen name="products/index" options={{ title: 'Products',headerTitleAlign: 'center', animation: 'ios_from_right'}} />
      <Stack.Screen name="products/[id]" options={{ title: 'Product',headerTitleAlign: 'center', animation: 'ios_from_right'}} />
    </Stack>
  );
};

export default StackLayout;
