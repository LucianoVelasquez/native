import { Redirect, Tabs } from "expo-router";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',  headerShown: false  }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="favorite/index"
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  );
}
