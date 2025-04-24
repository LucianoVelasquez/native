import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global.styles';
import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface CalculatorButtonProps extends PressableProps {
    label: string;
    color?: string;
    blackText?: boolean;
}

const CalculatorButton = ({ label, color, blackText, ...props}: CalculatorButtonProps) => {
    return (
        <Pressable style={globalStyles.buttonCalculator} {...props}>
            <Text style={[globalStyles.buttonCalculatorText, {color: blackText ? Colors.darkGray : "white"}]}>{label}</Text>
        </Pressable>
    )
};

export default CalculatorButton;

