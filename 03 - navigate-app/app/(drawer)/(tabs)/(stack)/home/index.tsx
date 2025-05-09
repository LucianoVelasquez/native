import CustomButton from '@/components/shared/custombotton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import Drawer from 'expo-router/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const navigation = useNavigation();

  const toggleDrawer = () => {
    // Aquí puedes implementar la lógica para abrir o cerrar el Drawer
    navigation.dispatch( DrawerActions.toggleDrawer );

  }

  return (
    <View className='flex-1 items-center justify-center '>
      {/* Puedes empezar a añadir tus componentes aquí */}

      <CustomButton className='w-1/2' color='secondary' onPress={() => router.push('/profile')}>Profile</CustomButton>
      <CustomButton className='w-1/2' color='secondary' onPress={() => router.push('/setting')}>Settings</CustomButton>
      <CustomButton className='w-1/2' color='primary' onPress={() => router.push('/products')}>Products</CustomButton>
      <CustomButton className='w-1/2' color='secondary' onPress={toggleDrawer}>Abrir Drawer</CustomButton>

    </View>
  );
}

