import { Colors } from '@/constants/Colors';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global.styles';
import ThemeText from '@/components/ThemeText';
import { StatusBar } from 'expo-status-bar';
import CalculatorButton, { CalculatorButtonProps } from '@/components/CalculatorButton';
import { useCalculator } from '@/hooks/useCalculator';


export default function Calculator() {

  const { buildNumber, numberView, previousNumber,formula } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 50, paddingBottom: 50 }}>
        <ThemeText
          variant='h1'
        >{formula}
        </ThemeText>
        <ThemeText
          variant='h2'
        >50
        </ThemeText>
      </View>

      {/* Files de Bottones */}
      
      <View style={globalStyles.row}>

        <CalculatorButton blackText color={Colors.lightGray} label='C' buildNumber={buildNumber} />
        <CalculatorButton blackText color={Colors.lightGray} label='+/-' buildNumber={buildNumber} />
        <CalculatorButton blackText color={Colors.lightGray} label='Del' buildNumber={buildNumber} />    
        <CalculatorButton color={Colors.orange} label='/' buildNumber={buildNumber} />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='7' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='8' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='9' buildNumber={buildNumber} />    
        <CalculatorButton color={Colors.orange} label='x' buildNumber={buildNumber} />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='4' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='5' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='6' buildNumber={buildNumber} />    
        <CalculatorButton color={Colors.orange} label='-' buildNumber={buildNumber} />   
          
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='1' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='2' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='3' buildNumber={buildNumber} />    
        <CalculatorButton color={Colors.orange} label='+' buildNumber={buildNumber} />   
      </View >

      <View style={globalStyles.row}>

        <CalculatorButton doubleSize color={Colors.darkGray} label='0' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='.' buildNumber={buildNumber} />
        <CalculatorButton total color={Colors.orange} label='='  buildNumber={buildNumber} />     
      </View >

    </View>
  );
}


