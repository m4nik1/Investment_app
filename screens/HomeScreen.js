import React, { useState } from 'react';
import * as firebase from 'firebase'
import { StyleSheet, FlatList, Button, View } from 'react-native';
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
    return investmentItems
  })


  const dispatch = useDispatch()
  const userID = firebase.auth().currentUser.uid
  const [loaded, setLoaded] = useState(props.navigation.getParam('loaded'))

  if(loaded == 'true') {
    // console.log('This is working!')
    console.log(loaded)
    dispatch(investmentActions.fetchInvestments(userID))
    setLoaded('false')
  }

  return (
    <FlatList
      data={investments}
      renderItem={itemData => (
        <InvestmentItem
          symbol={itemData.item.symbol}
          shares={itemData.item.shares}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'StockDetails',
              params: {
                symbol: itemData.item.symbol,
                shares: itemData.item.shares
              }
            })}
          }
        />
      )}
    />
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Investments"
          iconName='ios-add'
          onPress={() => {
            navData.navigation.navigate('NewInvestment');
          }}
        />
      </HeaderButtons>
    ),
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