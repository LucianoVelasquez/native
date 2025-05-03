import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      {/* Puedes empezar a añadir tus componentes aquí */}
      <Text className='text-secondary-default'>Pantalla de Productos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
});
