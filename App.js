/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {
  Platform,
  AsyncStorage,
} from 'react-native';
import ImmunizationsPage from "./ImmunizationsPage";
import ImmunizationDetail from "./ImmunizationDetail"
import HomePage from "./HomePage"
import ScreeningsPage from "./ScreeningsPage";
import ScreeningDetailPage from "./ScreeningDetailPage";
import OnboardingPage from "./OnboardingPage";


const MainNavigator = TabNavigator({
  Home: {
    screen: HomePage,
  },
  Immunizations: {
    screen: StackNavigator({
      Page: {screen: ImmunizationsPage},
      Detail: {screen: ImmunizationDetail}
    }, {
      navigationOptions: {
        header: null,
      },
    }),
  },
  Screenings: {
    screen: StackNavigator({
      ScreeningsPage: {screen: ScreeningsPage},
      ScreeningDetail: {
        screen: ScreeningDetailPage
      }
    }, {
      navigationOptions: {
        header: null,
      },
    })
  },
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


export default class App extends Component {
  render() {
    return (<AppNavigator/>)
  }
}
