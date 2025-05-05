import { products } from '@/store/products';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ProductsScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      {/* Puedes empezar a añadir tus componentes aquí */}
      <FlatList
      className='mt-5'
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>{
          return(
            <View className='w-screen items-center rounded-md bg-primary p-3 mb-3'>
              <Text className='text-white text-lg font-bold'>{item.title}</Text>
              <Text className='text-white text-xl mt-2 font-bold'>$ {item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`} className='mt-2 bg-secondary-default p-2 rounded-md'>Mas informacion</Link>
            </View>
          )
        }}
      />
    </View>
  );
}
