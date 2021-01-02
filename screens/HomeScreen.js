import React from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import InvestmentItem from '../components/investItem';

const HomeScreen = props => {
  const investments = useSelector(state => {
    const investItems = []
    for (const key in state.invest.investments) {
      investItems.push({
        id: state.invest.investments[key].id,
        symbol: key,
        shares: state.invest.investments[key].shares,
        price: state.invest.investments[key].price
      })
    }
    return investItems
  })

  console.log(investments)

  return (
    <FlatList
      data={investments}
      renderItem={itemData => {
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
      }
    }
    />
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
