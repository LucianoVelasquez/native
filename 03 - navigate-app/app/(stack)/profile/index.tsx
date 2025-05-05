import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProductsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Puedes empezar a añadir tus componentes aquí */}
      <Text className='text-secondary-default'>Profile</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
