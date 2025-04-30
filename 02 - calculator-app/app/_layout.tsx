import { View, Text,  } from 'react-native';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { globalStyles } from '@/styles/global.styles';

/**
 * Componente de diseño raíz de la aplicación.
 * Configura el fondo, carga las fuentes personalizadas y define la estructura básica
 * que envuelve a todas las pantallas de la aplicación utilizando el componente Slot de Expo Router.
 * También configura la barra de estado.
 *
 * @returns {React.ReactElement | null} El elemento de diseño raíz o null si las fuentes no se han cargado.
 */
export default function RootLayout() {

  /**
   * Carga la fuente personalizada SpaceMono utilizando el hook useFonts de expo-font.
   * El archivo de la fuente se carga desde el directorio assets/fonts.
   * 
   * @returns {[boolean]} Un array que contiene un booleano indicando si las fuentes están cargadas
   */
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  /**
   * Retorno anticipado si las fuentes no han terminado de cargar para prevenir problemas de renderizado.
   * Retorna null para no renderizar nada hasta que las fuentes estén listas.
   */
  if (!fontsLoaded) {
    return null;
  }

  return (
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
