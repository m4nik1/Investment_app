import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'

import Card from '../components/Card';
import Input from '../components/input';
import { useState } from 'react';

const Home = props => {

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input style={styles.search} returnKeyType='search' placeholder='Search' />
          <Button title='Add' onPress={() => {
            props.navigation.navigate('AddScreen')
          }} />
        </View>
        <Card style={styles.card}>
          <Text style={styles.name}>Stock Name</Text>
          <Input style={styles.graph} />
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 80,
    marginLeft: 20,
    flexDirection: 'row',
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

export default Home;