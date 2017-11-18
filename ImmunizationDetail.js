import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  Button,
  TouchableHighlight
} from 'react-native';

import {Card, List, ListItem, Header} from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default class ImmunizationsPage extends Component {


  render() {

    const immunizationData = this.props.navigation.state.params.immunization;

    return (
        <View style={styles.container}>
          <Header
              leftComponent={<Button title={"Back"}
                                     color={'white'}
                                     onPress={() => this.props.navigation.goBack(null)}/>}

              backgroundColor={'#4DE8E8'}
              centerComponent={{
                text: immunizationData.title,
                style: {color: '#fff', fontWeight: 'bold', fontSize: 24}
              }}>
          </Header>
          <Card
              containerStyle={{
                padding: 10,
                shadowOffset: {width: 1, height: 1,},
                shadowColor: '#4DE8E8',
                shadowOpacity: .2,
              }}
              hideChevron={true}
              title={immunizationData.subtitle}>
            <View style={{
              paddingLeft: 20,
            }}>
              <Text style={{
                fontWeight: 'bold',
                color: immunizationData.due_date == 'ASAP' ? '#FF8A65' : 'black'
              }}>Due Date: {
                <Text style={{fontWeight: '300'}}>{immunizationData.due_date}</Text>}
              </Text>
              <Text>{`It is ${immunizationData.classification} that you receive a ${immunizationData.title} ${immunizationData.timing}`}</Text>
            </View>
            {
              immunizationData.prior_dates.map((item, i) => (
                  <ListItem key={i} title={JSON.stringify(item)}/>))
            }
          </Card>

        </View>)
  }
}

