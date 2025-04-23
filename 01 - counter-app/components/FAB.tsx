import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
    // Aquí puedes definir las props que recibirá el componente en el futuro
    label: string;
    position: "left" | "right" | "center";

    //Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

const FAB = ({ label, onPress, onLongPress, position }: Props) => {
    return (

        <Pressable
            style={({ pressed }) => [
                styles.bottonCostum,
                position === "left"
                    ? { left: 20 }
                    : position === "right"
                        ? { right: 20 }
                        : {},
                pressed ? { opacity: 0.8 } : {}
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >

            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{label}</Text>

        </Pressable>

    );
};

const styles = StyleSheet.create({
    bottonCostum: {
        // Estilos para el contenedor principal del FAB
        backgroundColor: "#1E90FF", // Dodger Blue - un azul más intenso y vibrante
        position: 'absolute',
        bottom: 20,
        padding: 15,
        borderRadius: 10,
    },
});

export default FAB;
