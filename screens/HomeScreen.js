import React from 'react';
import moment from 'moment'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import InvestmentItem from '../components/investItem';

const HomeScreen = props => {
  const investments = useSelector(state => state.invest.investments);

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