import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global.styles';
import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

export interface CalculatorButtonProps extends PressableProps {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    total?: boolean;
    buildNumber?: (numberText: string) => void;
    cleanNumber?: () => void;
    deleteLastNumber?: () => void;
    toogleSign?: () => void;
    divideOperator?: () => void;
    multiplyOperator?: () => void;
    substractOperator?: () => void;
    addOperator?: () => void;
    calculate?: () => void;
    caclulateResult?: () => void;
}

const CalculatorButton = ({ label, color, blackText = false, doubleSize = false, total = false, buildNumber, cleanNumber, deleteLastNumber, toogleSign, divideOperator,
                            multiplyOperator, substractOperator, addOperator, calculate, caclulateResult, ...props }: CalculatorButtonProps) => {



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
                    buildNumber?.(label);
                    cleanNumber?.();
                    deleteLastNumber?.();
                    toogleSign?.();
                    divideOperator?.();
                    multiplyOperator?.();
                    substractOperator?.();
                    addOperator?.();
                    calculate?.();
                    caclulateResult?.();
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

