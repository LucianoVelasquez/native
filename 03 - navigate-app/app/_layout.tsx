import { Stack, Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import "../global.css";
import React from 'react';

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1'>
      {/* <Stack/> */}
      {/* <Stack />: Configura un navegador de tipo "stack" (pila). Renderiza la ruta hija actual dentro de este contexto,
          proporcionando automáticamente un encabezado, botón de retroceso y transiciones. Ideal para navegación jerárquica. */}
      <Slot /> 
      {/* <Slot />: Renderiza la ruta hija actual sin agregar UI de navegación (como encabezados o pestañas). Útil para layouts simples. */}
    </SafeAreaView>
  );
}
