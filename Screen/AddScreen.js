import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Input from '../components/input';

const AddScreen = props => {
  return(
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <View style={styles.symbolView}>
          <Text style={styles.symbolText}>Stock Symbol</Text>
          <TextInput style={styles.symbolInput} placeholder='eg. APPL' />
        </View>
        <View style={styles.sharesView}>
          <Text style={styles.sharesText}>Shares Bought</Text>
          <TextInput placeholder='0' style={styles.sharesInput}/>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>Price</Text>
          <TextInput style={styles.priceInput} placeholder='$1' />
        </View>
        <Button title='Submit' style={styles.submit} onPress={() => Alert.alert('Information Submitted')}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
  symbolView: {
    flexDirection: 'row',
    marginTop: 100
  },
  symbolInput: {
    marginLeft: 90,
    fontSize: 15,
  },
  symbolText: {
    fontSize: 15,
    marginLeft: 50,
  },
  sharesView: {
    flexDirection: 'row',
    marginTop: 20
  },
  sharesText: {
    fontSize: 15,
    marginLeft: 50,
  },
  sharesInput: {
    marginLeft: 85,
    fontSize: 15,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 20
  },
  priceText: {
    fontSize: 15,
    marginLeft: 50,
  },
  priceInput: {
    marginLeft: 150,
    fontSize: 15,
  },
});

export default AddScreen;