import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import NewInvestmentScreen from '../screens/NewInvestScreen';
import HomeScreen from '../screens/HomeScreen'
import StockDetailScreen from "../screens/StockDetailScreen"
import Colors from '../constants/Colors';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    NewInvestment: NewInvestmentScreen,
    StockDetails: StockDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(Navigator);
