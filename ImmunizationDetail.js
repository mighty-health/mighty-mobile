import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class ImmunizationsPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Immunization Details!</Text>
        </View>)
  }
}

