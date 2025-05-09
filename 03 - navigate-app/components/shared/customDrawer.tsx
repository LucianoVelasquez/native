import { View,Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView,DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = ( props : DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props} >

      <View className='flex justify-center items-center bg-blue-500 h-[125px] rounded-lg p-10 mb-5'>
        <View className='flex justify-center items-center h-24 w-24 rounded-full bg-white'>
          <Text className='text-blue-500 font-bold text-3xl'>LV</Text>
        </View>
      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
