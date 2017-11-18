import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Platform,
  Animated,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Card,
  Header,
  Actions,
  ContentContainer,
  GradientBackgrounds,
} from 'react-native-onboarding-component';

import LoginPage from "./LoginPage";


const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const pages = [{
  backgroundColor: '#4DE8E8'
}, {
  backgroundColor: 'white'
}, {
  backgroundColor: 'transparent'
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default class OnboardingPage extends Component {

  scrollX = new Animated.Value(0);

  scrollTo = (x) => {
    this.scrollView._component.scrollTo({x, animated: true});
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <StatusBar
              backgroundColor="#4DE8E8"
              barStyle="light-content"/>

          <GradientBackgrounds
              colors={pages.map(page => page.backgroundColor)}
              scrollX={this.scrollX}
              style={{height: '100%'}}/>


          <Animated.ScrollView
              horizontal
              ref={(scrollView) => {
                this.scrollView = scrollView;
              }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              scrollEventThrottle={1}
              onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
                  {useNativeDriver: true}
              )}>

            <View key={1}
                  style={[styles.card, {
                    width: deviceWidth,
                    flexDirection: 'column'
                  }]}>
              <Text style={{color: 'white', fontSize: 24}}>Welcome to Mighty Health</Text>

            </View>
            <View><LoginPage navigation={this.props.navigation}/></View>
          </Animated.ScrollView>
        </View>
    );
  }
}