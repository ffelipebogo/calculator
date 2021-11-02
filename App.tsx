import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/pages/Home';

export default function App() {
  return (

      <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
          <Home />
      </SafeAreaView>
  );
}

