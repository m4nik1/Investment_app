import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import * as firebase from 'firebase'
import DateTimePicker from '@react-native-community/datetimepicker';

import * as investmentActions from '../store/invest-actions'

import { useDispatch } from 'react-redux';

const NewInvestmentScreen = props => {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState()
  const [shares, setShares] = useState('');
  const [date, changeDate] = useState(new Date(1598051730000));


  const userId = firebase.auth().currentUser.uid
  

  const dispatch = useDispatch()

  const symbolChange = text => {
    // you could add validation
    setSymbol(text);
  };
  const shareChange = text => {
    setShares(text)
  }
  const priceChange  = text => {
    setPrice(text)
  }

  const dateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    changeDate(currentDate);
  }

  const saveInvestment = () => {
    // redux call
    dispatch(investmentActions.addInvestment(symbol, shares, price));
    props.navigation.goBack();
  };

  return (
    // <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={styles.symbolView}>
                  <Text style={styles.symbolText}>Stock Symbol</Text>
                  <TextInput style={styles.symbolInput} autoCapitalize='characters' placeholder='eg. AAPL' onChangeText={symbolChange} value={symbol} />
                </View>
                <View style={styles.sharesView}>
                  <Text style={styles.sharesText}>Shares Bought</Text>
                  <TextInput placeholder='0' style={styles.sharesInput} onChangeText={shareChange} value={shares} />
                </View>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>Price Bought</Text>
                  <TextInput placeholder='$0' style={styles.priceInput} onChangeText={priceChange} value={price} />
                </View>
                <View>
                  <DateTimePicker 
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="Default"
                    onChange={dateChange}
                  />
                </View>
                <Button title='Submit' style={styles.submit} onPress={saveInvestment} />
            </View>
  //  </TouchableWithoutFeedback>
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
    width: 100
  },
  symbolText: {
    fontSize: 15,
    marginLeft: 50,
  },
  sharesView: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10
  },
  sharesText: {
    fontSize: 15,
    marginLeft: 40,
  },
  sharesInput: {
    marginLeft: 85,
    fontSize: 15,
    width: 100
  },
  priceText: {
    marginLeft: 45,
    fontSize: 15,
  },
  priceView: {
    flexDirection: 'row',
    padding: 20
  },
  priceInput: {
    fontSize: 15,
    marginLeft: 78,
    width: 100,
  }
});

export default NewInvestmentScreen;
