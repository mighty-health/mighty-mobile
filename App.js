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
import AppointmentsPage from "./AppointmentsPage";
import ScreeningsPage from "./ScreeningsPage";

const AppNavigator = TabNavigator({
  Immunizations: {
    screen: ImmunizationsPage,
  },
  Appointments: {
    screen: AppointmentsPage
  },
  Screenings:{
    screen: ScreeningsPage
  }


}, {
  tabBarOptions: {
    activeTintColor: '#4DD0E1' ,
  },
});

export default AppNavigator