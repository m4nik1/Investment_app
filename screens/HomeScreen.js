import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as investActions from '../store/invest-actions'

import HeaderButton from '../components/HeaderButton';
import InvestmentItem from '../components/investItem';

const HomeScreen = props => {
  const investments = useSelector(state => state.invest.investments);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(investActions.loadInvestments())
  }, [dispatch])

  return (
    <FlatList
      data={investments}
      renderItem={itemData => (
        <InvestmentItem
          symbol={itemData.item.symbol}
          shares={itemData.item.shares}
          price={itemData.item.price}
          onSelect={() => {
            props.navigation.navigate('StockDetails')
          }}
        />
      )}
    />
    // <View>
    //   <Button title='press this' onPress={() => console.log(investments)} />
    // </View>
  );
};

HomeScreen.navigationOptions = navData => {
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
    )
  };
};

const styles = StyleSheet.create({});

export default HomeScreen;
