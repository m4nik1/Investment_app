import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Input from './components/input'
import Home from './Screen/HomeScreen'
import Card from './components/Card'

export default function App() {
  let content = <Home />

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
