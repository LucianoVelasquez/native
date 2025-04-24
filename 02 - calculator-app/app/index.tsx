import { Colors } from '@/constants/Colors';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global.styles';
import ThemeText from '@/components/ThemeText';
import { StatusBar } from 'expo-status-bar';
import CalculatorButton from '@/components/CalculatorButton';

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

        <CalculatorButton label='1' />
        <CalculatorButton label='2'  />
        <CalculatorButton label='3'  />    
        <CalculatorButton label='4'  />   

      </View>

    </View >

  );
}


