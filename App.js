import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite'

import Home from './Screen/HomeScreen';
import AddScreen from './Screen/AddScreen';

export default function App() {

  const db = SQLite.openDatabase('db.db')

  const [screen, setScreen] = useState();



  const screenChange = (screenBool) => {
    setScreen(screenBool)
  };

  let content = <Home screenChange={screenChange}/>

  if (screen) {
    content = <AddScreen />
  }

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
