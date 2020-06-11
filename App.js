import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Home from './Screen/HomeScreen';
import AddScreen from './Screen/AddScreen';

export default function App() {

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
