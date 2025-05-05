import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { products } from '@/store/products';

const ProductDetailScreen = () => {
  // useLocalSearchParams se usa para obtener los parámetros de la ruta local.
  // En este caso, obtendremos el 'id' del producto de la URL.
  const { id } = useLocalSearchParams();

  const product = products.find((product) => product.id === id);

  return (
    <View className='flex-1 items-center  p-5'>
      <Text className='text-secondary-default text-2xl font-bold'>Detalles del Producto</Text>
      <Text className='text-secondary-default text-lg font-bold mb-5'>ID del Producto: {id}</Text>
      <Text className='text-secondary-default text-lg font-bold'>{product?.description}</Text>
      {/* Aquí puedes añadir más lógica para buscar y mostrar los detalles del producto usando el 'id' */}
    </View>
  );
};



export default ProductDetailScreen;
