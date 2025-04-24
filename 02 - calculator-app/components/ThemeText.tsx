import { globalStyles } from '@/styles/global.styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
  // Aquí se pueden agregar props adicionales específicas del tema
  variant?: 'h1' | 'h2';
  
}

const ThemeText = ({ children, variant, ...props }: ThemeTextProps) => {

  return (
    <Text style={[
        { color: 'white',fontFamily: 'SpaceMono'}, 
        variant == 'h1' && globalStyles.miniResult,
        variant == 'h2' && globalStyles.result,
    ]} 
    numberOfLines={1}
    adjustsFontSizeToFit
    {...props}>
      {children}
    </Text>
  );
};

export default ThemeText;


