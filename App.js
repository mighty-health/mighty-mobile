/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {
  Platform,
} from 'react-native';
import ImmunizationsPage from "./ImmunizationsPage";
import HomePage from "./HomePage";
import ScreeningsPage from "./ScreeningsPage";
import ScreeningDetailPage from "./ScreeningDetailPage";

const AppNavigator = TabNavigator({
  Immunizations: {
    screen: ImmunizationsPage,
  },
  Home: {
    screen: HomePage
  },
  Screenings:{
    screen: ScreeningsPage
  },
  ScreeningDetail:{
    screen: ScreeningDetailPage
  },
}, {
  tabBarOptions: {
    activeTintColor: '#4DD0E1' ,
  },
});

export default AppNavigator