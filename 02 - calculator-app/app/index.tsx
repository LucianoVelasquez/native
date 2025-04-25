import { Colors } from '@/constants/Colors';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global.styles';
import ThemeText from '@/components/ThemeText';
import { StatusBar } from 'expo-status-bar';
import CalculatorButton, { CalculatorButtonProps } from '@/components/CalculatorButton';


export default function Calculator() {

  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 50, paddingBottom: 50 }}>
        <ThemeText
          variant='h1'
        >2x25
        </ThemeText>
        <ThemeText
          variant='h2'
        >50
        </ThemeText>
      </View>

      {/* Files de Bottones */}
      
      <View style={globalStyles.row}>

        <CalculatorButton blackText color={Colors.lightGray} label='C' />
        <CalculatorButton blackText color={Colors.lightGray} label='+/-'  />
        <CalculatorButton blackText color={Colors.lightGray} label='Del'  />    
        <CalculatorButton color={Colors.orange} label='/'  />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='7' />
        <CalculatorButton color={Colors.darkGray} label='8'  />
        <CalculatorButton color={Colors.darkGray} label='9'  />    
        <CalculatorButton color={Colors.orange} label='x'  />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='4' />
        <CalculatorButton color={Colors.darkGray} label='5'  />
        <CalculatorButton color={Colors.darkGray} label='6'  />    
        <CalculatorButton color={Colors.orange} label='-'  />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='1' />
        <CalculatorButton color={Colors.darkGray} label='2'  />
        <CalculatorButton color={Colors.darkGray} label='3'  />    
        <CalculatorButton color={Colors.orange} label='+'  />   
      </View >

      <View style={globalStyles.row}>

        <CalculatorButton doubleSize color={Colors.darkGray} label='0' />
        <CalculatorButton color={Colors.darkGray} label='.'  />
        <CalculatorButton total color={Colors.orange} label='='   />     
      </View >

    </View>
  );
}


