import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global.styles';
import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

/**
 * Propiedades para el componente CalculatorButton.
 * Extiende las propiedades estándar de Pressable.
 */
export interface CalculatorButtonProps extends PressableProps {
    /** Texto que se muestra en el botón. */
    label: string;
    /** Color de fondo del botón. */
    color?: string;
    /** Indica si el texto del botón debe ser negro. Por defecto es blanco. */
    blackText?: boolean;
    /** Indica si el botón debe ocupar el doble de ancho. */
    doubleSize?: boolean;
    /** Indica si el botón es el de total (=), para aplicar una vibración diferente. */
    total?: boolean;
    /** Función para construir el número actual. */
    buildNumber?: (numberText: string) => void;
    /** Función para limpiar el número actual (AC). */
    cleanNumber?: () => void;
    /** Función para borrar el último dígito introducido. */
    deleteLastNumber?: () => void;
    /** Función para cambiar el signo del número actual (+/-). */
    toogleSign?: () => void;
    /** Función para establecer el operador de división. */
    divideOperator?: () => void;
    /** Función para establecer el operador de multiplicación. */
    multiplyOperator?: () => void;
    /** Función para establecer el operador de resta. */
    substractOperator?: () => void;
    /** Función para establecer el operador de suma. */
    addOperator?: () => void;
    /** Función para realizar el cálculo (obsoleto, usar caclulateResult). */
    calculate?: () => void;
    /** Función para calcular y mostrar el resultado (=). */
    caclulateResult?: () => void;
}

/**
 * Componente que representa un botón de la calculadora.
 *
 * @param {CalculatorButtonProps} props - Propiedades del componente.
 * @returns {React.ReactElement} El elemento del botón de la calculadora.
 */
const CalculatorButton = ({
    label,
    color,
    blackText = false,
    doubleSize = false,
    total = false,
    buildNumber,
    cleanNumber,
    deleteLastNumber,
    toogleSign,
    divideOperator,
    multiplyOperator,
    substractOperator,
    addOperator,
    calculate,
    caclulateResult,
    ...props
}: CalculatorButtonProps) => {

    return (
        <Pressable style={({ pressed }) =>
            [globalStyles.buttonCalculator,
            {
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 170 : 75,
            }]}
            {...props}
            onPress={
                () => {
                    // Llama a la función correspondiente según el tipo de botón
                    buildNumber?.(label);
                    cleanNumber?.();
                    deleteLastNumber?.();
                    toogleSign?.();
                    divideOperator?.();
                    multiplyOperator?.();
                    substractOperator?.();
                    addOperator?.();
                    calculate?.(); // Considerar eliminar si es obsoleto
                    caclulateResult?.();
                    // Aplica vibración háptica según si es el botón total o no
                    total ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) : Haptics.selectionAsync()
                }
            }
        >
            <Text style={[
                globalStyles.buttonCalculatorText,
                { color: blackText ? "black" : "white" }
            ]}>
                {label}
            </Text>
        </Pressable>
    )
};

export default CalculatorButton;

