import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Keyboard
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as investmentActions from '../store/invest-actions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const NewInvestmentScreen = props => {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');

  const dispatch = useDispatch();

  const symbolChange = text => {
    // you could add validation
    setSymbol(text);
  };
  const shareChange = text => {
    setShares(text)
  }

  const saveInvestment = () => {
    dispatch(investmentActions.addInvestment(symbol, shares));
    props.navigation.goBack();
  };

  return (
    // <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={styles.symbolView}>
                  <Text style={styles.symbolText}>Stock Symbol</Text>
                  <TextInput style={styles.symbolInput} placeholder='eg. APPL' onChangeText={symbolChange} value={symbol} />
                </View>
                <View style={styles.sharesView}>
                  <Text style={styles.sharesText}>Shares Bought</Text>
                  <TextInput placeholder='0' style={styles.sharesInput} onChangeText={shareChange} value={shares} />
                </View>
                <Button title='Submit' style={styles.submit} onPress={saveInvestment}/>
            </View>
   // </TouchableWithoutFeedback>
  );
};

NewInvestmentScreen.navigationOptions = {
  headerTitle: 'Add Investment'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  },
  symbolView: {
    flexDirection: 'row',
    marginTop: 120
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
});

export default NewInvestmentScreen;
