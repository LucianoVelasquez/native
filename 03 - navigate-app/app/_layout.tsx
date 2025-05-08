import { Stack, Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import "../global.css";
import React from 'react';

export default function RootLayout() {
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
    /* <Stack/> 
       <Stack />: Configura un navegador de tipo "stack" (pila). Renderiza la ruta hija actual dentro de este contexto,
          proporcionando automáticamente un encabezado, botón de retroceso y transiciones. Ideal para navegación jerárquica. 
       <Slot />  
     <Slot />: Renderiza la ruta hija actual sin agregar UI de navegación (como encabezados o pestañas). Útil para layouts simples. */ 
  );
}
