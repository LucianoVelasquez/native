import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    backgroundColor: {
    flex: 1,
    backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    miniResult:{
        fontSize: 70,
        color: Colors.textPrimary,
        textAlign: 'right',
        fontWeight: '400',
    },
    result:{
        fontSize: 40,
        color: Colors.textSecondary,
        textAlign: 'right',
        fontWeight: '300',
    }
});

