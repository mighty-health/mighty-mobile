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
import AppointmentsPage from "./AppointmentsPage";
import ScreeningsPage from "./ScreeningsPage";
import OnboardingPage from "./OnboardingPage";
import HomePage from "./HomePage";


const MainNavigator = TabNavigator({
  Home: {
    screen: HomePage,
  },
  Immunizations: {
    screen: ImmunizationsPage,
  },
  Screenings: {
    screen: ScreeningsPage
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
