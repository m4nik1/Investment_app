import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const AddScreen = props => {
  return(
    <View style={styles.screen}>
      <Text style={styles}>Testing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});

export default AddScreen;