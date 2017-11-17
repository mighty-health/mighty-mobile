/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {
  Platform,
} from 'react-native';
import ImmunizationsPage from "./ImmunizationsPage";
import HomePage from "./HomePage";
import ScreeningsPage from "./ScreeningsPage";
import ScreeningDetailPage from "./ScreeningDetailPage";
import OnboardingPage from "./OnboardingPage";



const MainNavigator = TabNavigator({
  Home: {
    screen: HomePage,
  },
  Immunizations: {
    screen: ImmunizationsPage,
  },
  Screenings:{
    screen: ScreeningsPage
  },
  ScreeningDetail:{
    screen: ScreeningDetailPage
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#eee',
  },
});

const AppNavigator = StackNavigator({
  Onboarding: {screen: OnboardingPage},
  Main: {screen: MainNavigator}
}, {
  mode: 'modal',
  navigationOptions: {
    header: null,
  },
});


export default AppNavigator
