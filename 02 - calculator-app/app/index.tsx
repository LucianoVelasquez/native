import { Colors } from '@/constants/Colors';
import { View, Text } from 'react-native';
import { globalStyles } from '@/styles/global.styles';

export default function Calculator() {
  return (
    <View style={globalStyles.calculatorContainer}>

      <Text
        style={globalStyles.miniResult}
      >2x2</Text>
      <Text
        style={globalStyles.result}
      >4</Text>

    </View>
  );
}


