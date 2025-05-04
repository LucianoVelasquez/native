import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary';

}


const CustomButton = ({ children, color, ...props }: Props) => {
  return (
    <Pressable 
    className={`p-3 mb-5 rounded-md ${color === 'primary' ? 'bg-primary' : 'bg-secondary-default'} active:opacity-70`} {...props}>
      <Text className={`text-center text-white ${color === 'primary' ? 'text-primary-default' : 'text-secondary-default'}`}>{children}</Text>
    </Pressable>
  );
};



export default CustomButton;
