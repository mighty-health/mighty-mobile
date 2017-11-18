import React, {Component} from 'react';
//import {Button} from 'react-native-elements'
import Button from 'apsl-react-native-button'
import {Card, Header, ButtonGroup, CheckBox} from 'react-native-elements'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';

export default class ScreeningDetailPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Header
              leftComponent={<Button title={"Back"}
                                     color={'white'}
                                     onPress={() => this.props.navigation.goBack(null)}/>}
              backgroundColor={'#4DE8E8'}
              centerComponent={{
                text: 'Screening Details',
                style: {color: '#fff', fontWeight: 'bold', fontSize: 24}
              }}>
          </Header>
          <Card>
            <Text>1. Laboratory Tests</Text>
            <Text>2. Chest X-Rays</Text>
            <Text>3. Heart Stress Tests</Text>
          </Card>
        </View>)
  }
}