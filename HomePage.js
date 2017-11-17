import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import {Card, Header, ButtonGroup} from 'react-native-elements'

import React, {Component} from 'react';


export default class HomePage extends Component<{}> {

  render() {
    return (<View>
      <Header
          backgroundColor={'#4DE8E8'}
          centerComponent={{text: 'Home', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}/>

      <Card
          containerStyle={{
            padding: 10,
            shadowOffset: {width: 1, height: 1,},
            shadowColor: '#4DE8E8',
            shadowOpacity: .2
          }}
          hideChevron={true}
          title={"BLOOD PRESSURE SCREENING"}>
        <Text>
          It recommended that you have your blood pressure checked every 3 to 5 years.
        </Text>
      </Card>
    </View>)
  }

}
