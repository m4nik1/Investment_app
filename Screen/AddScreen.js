import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Input from '../components/input';
import { AntDesign } from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite'

const AddScreen = props => {

  const db = SQLite.openDatabase('db.db')

  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [price, setPrice] = useState('');

  // after this app is done with the return statement this useEffect 
  // is called after this
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (symbol, shares, price, primary key not null);"
      );
    });
  }, []);

  function insertData() {
    db.transaction(tx => {
      tx.executeSql(
        `Insert into items (symbol, shares, price) values (${symbol}, ${shares}, ${price});`
      )
    });
    Alert.alert('Information Submitted');
  }

  const sharesHandler = sharesNum => {
    setShares(sharesNum)
  };

  const symbolHandler = symbolText => {
    setSymbol(symbolText)
  }

  const priceHandler = priceNum => {
    setPrice(priceNum);
  }

  const readValue = () => {
    db.transaction(tx => {
      tx.executeSql("select * from items")
    },
      null
    )
  }

  console.log({ readValue })

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <View style={styles.symbolView}>
          <Text style={styles.symbolText}>Stock Symbol</Text>
          <TextInput style={styles.symbolInput} placeholder='eg. APPL' value={symbol} onChangeText={symbolHandler} />
        </View>
        <View style={styles.sharesView}>
          <Text style={styles.sharesText}>Shares Bought</Text>
          <TextInput placeholder='0' style={styles.sharesInput} value={shares} onChangeText={sharesHandler} />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>Price</Text>
          <TextInput style={styles.priceInput} placeholder='$1' value={price} onChangeText={priceHandler} />
        </View>
        <Button title='Submit' style={styles.submit} onPress={insertData} />
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
  backButton: {
    marginTop: 30,
    marginLeft: 10
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