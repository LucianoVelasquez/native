import { Colors } from '@/constants/Colors';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global.styles';
import ThemeText from '@/components/ThemeText';
import { StatusBar } from 'expo-status-bar';
import CalculatorButton, { CalculatorButtonProps } from '@/components/CalculatorButton';
import { useCalculator } from '@/hooks/useCalculator';


export default function Calculator() {

  const { buildNumber,
    previousNumber,
    formula,
    cleanNumber,
    deleteLastNumber,
    toogleSign,
    divideOperator,
    multiplyOperator,
    substractOperator,
    addOperator,
    calculate,
    caclulateResult } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 50, paddingBottom: 50 }}>
        <ThemeText
          variant='h1'
        >{formula}
        </ThemeText>

        {
          formula === previousNumber ?
            <ThemeText>

            </ThemeText> :
            <ThemeText
              variant='h2'
            >{previousNumber}
            </ThemeText>
        }

      </View>

      {/* Files de Bottones */}

      <View style={globalStyles.row}>

        <CalculatorButton blackText color={Colors.lightGray} label='C' cleanNumber={cleanNumber} />
        <CalculatorButton blackText color={Colors.lightGray} label='+/-' toogleSign={toogleSign} />
        <CalculatorButton blackText color={Colors.lightGray} label='Del' deleteLastNumber={deleteLastNumber} />
        <CalculatorButton color={Colors.orange} label='/' divideOperator={divideOperator} />

      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='7' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='8' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='9' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.orange} label='x' multiplyOperator={multiplyOperator} />

      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='4' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='5' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='6' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.orange} label='-' substractOperator={substractOperator} />

      </View>

      <View style={globalStyles.row}>

        <CalculatorButton color={Colors.darkGray} label='1' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='2' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='3' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.orange} label='+' addOperator={addOperator} />
      </View >

      <View style={globalStyles.row}>

        <CalculatorButton doubleSize color={Colors.darkGray} label='0' buildNumber={buildNumber} />
        <CalculatorButton color={Colors.darkGray} label='.' buildNumber={buildNumber} />
        <CalculatorButton total color={Colors.orange} label='=' calculate={calculate} caclulateResult={caclulateResult} />
      </View >

    </View>
  );
}


