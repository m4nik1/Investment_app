import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import AddScreen from '../Screen/AddScreen'
import Home from '../Screen/HomeScreen'

const Navigation = createStackNavigator({
    Home: Home,
    AddScreen: AddScreen
})