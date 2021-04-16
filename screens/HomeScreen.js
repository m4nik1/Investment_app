import React, { useState } from 'react';
import * as firebase from 'firebase'
import { StyleSheet, FlatList, Button, View, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import * as investmentActions from '../store/invest-actions'
import HeaderButton from '../components/HeaderButton';
import InvestmentItem from '../components/investItem';
import invest from "../model/invest";

const HomeScreen = props => {
  const investments = useSelector(state => {
    const investmentItems = [];
    for (const key in state.invest.investments) {
      investmentItems.push({
        id: state.invest.investments[key].id,
        symbol: key,
        shares: state.invest.investments[key].shares,
        price: state.invest.investments.price
      })
    }
    return investmentItems;
  })


  const dispatch = useDispatch();
  const userID = firebase.auth().currentUser.uid;
  const [loaded, setLoaded] = useState(props.navigation.getParam('loaded'));

  if(loaded == 'true') {
    console.log('This is working!')
    console.log(loaded);
    //console.log("This is the id: " +  userID)
    dispatch(investmentActions.fetchInvestments(userID));
    setLoaded('false');
  }
  const removeInvestment = (stockSymbol) => {
    Alert.alert("Deleting Investment", 
                "Are you sure about this?",
                [
                  {
                    text:"Yes",
                    onPress: () => {
                      console.log(stockSymbol);
                      dispatch(investmentActions.deleteInvestment(userID, stockSymbol));
                    }
                  },
                  {
                    text: "No",
                    onPress: () => console.log("Item Not removed"),
                    style: "Cancel"
                  }
                ])
  }

  return (
    <View>
      <FlatList
        data={investments}
        renderItem={itemData => (
          <InvestmentItem
            symbol={itemData.item.symbol}
            shares={itemData.item.shares}
            onSelect={() => { // not long press
              props.navigation.navigate({
                routeName: 'StockDetails',
                params: {
                  symbol: itemData.item.symbol,
                  shares: itemData.item.shares
                }
              })}
            }
            onDelete={() => removeInvestment(itemData.item.symbol)} // long press
          />
        )}
      />
    </View>
  );
};

HomeScreen.navigationOptions = navData => {
  const logOut = () => {
    firebase.auth().signOut()
      .then(() => {
        navData.navigation.navigate('Login')
        console.log('Logging Out')
      })
      .catch((error) => {
        errorCode = error.code
        errorMessage = error.message
        console.error(errorCode)
        console.log(errorMessage)
      })
  }

  return {
    headerTitle: 'All Stocks',
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Investments"
          iconName='ios-add'
          onPress={() => {
            navData.navigation.navigate('NewInvestment');
          }}
        />
      </HeaderButtons>
    ,
    headerLeft: () => (
      <View>
        <Button onPress={logOut} title='Log Out' />
      </View>
    )
  };
};

const styles = StyleSheet.create({
});

export default HomeScreen;
