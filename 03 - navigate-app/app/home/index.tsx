import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      {/* Puedes empezar a añadir tus componentes aquí */}
      <Text className='text-secondary-default text-2xl font-bold'>Home</Text>
      <Link className='text-secondary-default' href="/setting">Setting</Link>
      <Link className='text-secondary-default' href="/products">Products</Link>
      <Link className='text-secondary-default' href="/profile">Profile</Link>
      
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
