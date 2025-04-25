import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    backgroundColor: {
    // La propiedad flex: 1 en React Native es una propiedad de estilo que indica que el componente debe ocupar todo el 
    // espacio disponible en su contenedor padre.
    // En este caso, al aplicarlo al View principal, hace que este ocupe todo el espacio disponible en la pantalla.
    // Esto es especialmente útil para crear layouts que se adapten a diferentes tamaños de pantalla.
    flex: 1,
    backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
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
    },
    row:{
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    buttonCalculator:{
        height:75,
        width:75,
        backgroundColor:Colors.darkGray,
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:10,
        alignItems:"center",
    },
    buttonCalculatorText:{
        
        fontSize:30,
        fontWeight:"300",
    }
});

