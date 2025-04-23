import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';
export default function App() {

  const [count,setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={{fontSize:30,fontWeight:'light'}}>Contador ⏰ </Text>
      <Text style={{fontSize:80,fontWeight:'bold'}}>{count}</Text>

      <FAB 
      label='+1' 
      onPress={ () => setCount(count+1)} 
      onLongPress={ () => setCount(0)} 
      position='right' />

      <FAB 
      label='-1' 
      onPress={ () => setCount(count > 0 ? count-1 : 0)} 
      onLongPress={ () => setCount(0)} 
      position='left' />

      <FAB 
      label='Reset' 
      onPress={ () => setCount(0)}  
      position='center' />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible en la pantalla.
    backgroundColor: '#fff', // Establece el color de fondo del contenedor a blanco.
    alignItems: 'center', // Centra los elementos hijos horizontalmente dentro del contenedor.
    justifyContent: 'center', // Centra los elementos hijos verticalmente dentro del contenedor.
  },
});
