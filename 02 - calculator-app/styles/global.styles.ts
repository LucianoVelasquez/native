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
        height:80,
        width:80,
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

