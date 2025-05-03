import { Stack, Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import "../global.css";
import React from 'react';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
}
