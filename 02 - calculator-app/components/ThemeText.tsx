import { globalStyles } from '@/styles/global.styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { Text, TextProps } from 'react-native';

/**
 * Propiedades para el componente ThemeText.
 * Extiende las propiedades estándar de Text.
 */
interface ThemeTextProps extends TextProps {
  /** Variante de estilo para el texto (ej. 'h1', 'h2'). */
  variant?: 'h1' | 'h2';
}

/**
 * Componente de texto personalizado que aplica estilos de tema.
 * Utiliza la fuente 'SpaceMono' y aplica estilos adicionales basados en la prop 'variant'.
 *
 * @param {ThemeTextProps} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del texto.
 * @param {'h1' | 'h2'} [props.variant] - Variante de estilo a aplicar.
 * @param {TextProps} props - Otras propiedades estándar de Text.
 * @returns {React.ReactElement} El elemento Text estilizado.
 */
const ThemeText = ({ children, variant, ...props }: ThemeTextProps) => {
  return (
    <Text style={[
      { color: 'white', fontFamily: 'SpaceMono' },
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


