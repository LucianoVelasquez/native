import CustomButton from '@/components/shared/custombotton';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Puedes empezar a añadir tus componentes aquí */}
      <CustomButton color='primary' onPress={() => router.push('/home')}>Home</CustomButton>
      <CustomButton color='secondary' onPress={() => router.push('/profile')}>Profile</CustomButton>
      <CustomButton color='secondary' onPress={() => router.push('/setting')}>Settings</CustomButton>
      <CustomButton color='secondary' onPress={() => router.push('/products')}>Products</CustomButton>

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
