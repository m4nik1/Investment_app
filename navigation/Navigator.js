import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import NewInvestmentScreen from '../screens/NewInvestScreen';
import HomeScreen from '../screens/HomeScreen'
import StockDetailScreen from "../screens/StockDetailScreen"
import Colors from '../constants/Colors';
import AuthScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen'

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

const authNavigator = createStackNavigator(
  {
    Login: AuthScreen,
    SignUp: SignUp
  }
)

const MainNavigator = createSwitchNavigator(
  {
    auth: authNavigator,
    Navigator: Navigator,
  }
)

export default createAppContainer(MainNavigator);
