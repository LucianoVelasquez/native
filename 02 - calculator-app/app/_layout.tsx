import { View, Text,  } from 'react-native';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { globalStyles } from '@/styles/global.styles';

export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    // La propiedad flex: 1 en React Native es una propiedad de estilo que indica que el componente debe ocupar todo el espacio disponible en su contenedor padre.
    // En este caso, al aplicarlo al View principal, hace que este ocupe todo el espacio disponible en la pantalla.
    // Esto es especialmente útil para crear layouts que se adapten a diferentes tamaños de pantalla.
    <View style={globalStyles.backgroundColor}>

      <Text>Calculadora</Text>

      {/* El componente Slot es un componente especial de Expo Router que actúa como un contenedor para las rutas anidadas.
          Renderiza el contenido de la ruta actual y permite la navegación entre diferentes pantallas de la aplicación.
          En este caso, mostrará el contenido definido en el archivo index.tsx que es la pantalla principal de la calculadora. */}
      <Slot />
      {/* El componente StatusBar de Expo es un componente que permite controlar la barra de estado del dispositivo.
          La propiedad style="auto" hace que la barra de estado se adapte automáticamente al tema de la aplicación.
          En este caso, como el fondo es oscuro, la barra de estado mostrará el texto en color claro para mejor contraste.
          Esto mejora la experiencia del usuario al mantener la consistencia visual de la aplicación. */}
      <StatusBar style="auto" />

    </View>
  );
}
