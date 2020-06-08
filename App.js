import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Input from './components/input'
import Card from './components/Card'

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input style={styles.search} returnKeyType='search' placeholder='Search'/>
        </View>
        <Card style={styles.card}>
          <Text style={styles.name}>Stock Name</Text>
          <Input style={styles.graph}/>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 80,
    marginLeft: 20,
  },
  search: {
    height: 20,
    width: '80%',
    height: 30,
    fontSize: 17
  },
  card: {
    marginTop: 20,
    width: 350,
    height: 200,
    alignSelf: 'center'
  },
  name: {
    fontSize: 20
  },
  graph: {
    marginLeft: 170,
    height: 150,
    width: 150
  },
});
