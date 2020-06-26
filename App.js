import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite'

import Home from './Screen/HomeScreen';
import AddScreen from './Screen/AddScreen';
import Navigation from './Navigation/Navi'
import { investDB, fetchInvestment } from './helpers/investDB'

investDB()
  .then(() => {
    console.log('Database was created successfully')
  })
  .catch(err => {
    console.log('error was found');
    console.log(err);
  })

export default function App() {

  const [screen, setScreen] = useState();

  const screenChange = (screenBool) => {
    setScreen(screenBool)
  };

  let content = <Home screenChange={screenChange} />

  if (screen) {
    content = <AddScreen />
  }

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
