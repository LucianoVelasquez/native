import CustomButton from '@/components/shared/custombotton';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center '>
      {/* Puedes empezar a añadir tus componentes aquí */}
      
      <CustomButton  className='w-1/2'  color='secondary' onPress={() => router.push('/profile')}>Profile</CustomButton>
      <CustomButton  className='w-1/2'  color='secondary' onPress={() => router.push('/setting')}>Settings</CustomButton>
      <CustomButton  className='w-1/2'  color='primary' onPress={() => router.push('/products')}>Products</CustomButton>

    </View>
  );
}

