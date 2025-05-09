
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/customDrawer';
import { Dimensions } from 'react-native';

export default function Layout() {

  //Cacular el ancho de la pantalla del dispositivo y asignarlo a la variable width
  const width = Dimensions.get('window').width+80;

  

  return (
      <Drawer
        drawerContent={CustomDrawer}
         screenOptions={{
          
          drawerStyle:{
            width:width/2,
            backgroundColor:'#fff',
          },
          headerTitleStyle: {
            marginLeft: 110,
          },
         }}
      >
        <Drawer.Screen
          
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            headerShown: false,
            drawerLabel: 'Tabs',
            title: 'Tabs',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'apps' : 'apps-outline'} color={color} size={size} />
            ),
          
            
          }}
        />
        <Drawer.Screen
          
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={size} />
            ),
            
          }}
        />
        <Drawer.Screen
          name="schudel/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused? 'alarm' : 'alarm-outline'} color={color} size={size} />
            ),
          }}
        />
      </Drawer>
  );
}
