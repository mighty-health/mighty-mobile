import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import {Card, Header, ButtonGroup} from 'react-native-elements'
import * as Progress from 'react-native-progress';

export default class ImmunizationsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {immunizationData: []};
  }

  render() {
    const dummyDate = new Date();
    const dummyFormattedDate = `${dummyDate.getMonth() + 1}/${dummyDate.getDate()}/${dummyDate.getFullYear()}`;


    const patient_id = "a33d3135-2c7a-43ad-8804-3c2d3f492253";

    fetch(`http://mighty-engine.appspot.com/api/v1/immunizations/?patient_id=${patient_id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
          this.setState({immunizationData: responseJSON});
        });

    const buttons = ['Book', 'Dismiss'];
    const alertColor = '#FF8A65'
    return (
        <View>
          <Header
              backgroundColor={'#4DE8E8'}
              centerComponent={{text: 'Immunizations', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}>
          </Header>
          <ScrollView>
            <View style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 20
            }}>
            </View>
            {this.state.immunizationData.map(
                (immunization, i) => {
                  return (
                      <TouchableHighlight
                          key={i}
                          onPress={() => this.props.navigation.navigate("Detail", {immunization: immunization})}>
                        <View>
                          <Card
                              containerStyle={{
                                padding: 10,
                                shadowOffset: {width: 1, height: 1,},
                                shadowColor: '#4DE8E8',
                                shadowOpacity: .2,
                              }}
                              hideChevron={true}
                              title={immunization.subtitle}>
                            <View style={{
                              paddingLeft: 20,
                            }}>
                              <Text style={{
                                fontWeight: 'bold',
                                color: immunization.due_date == 'ASAP' ? alertColor : 'black'
                              }}>Due Date: {
                                <Text style={{fontWeight: '300'}}>{immunization.due_date}</Text>}
                              </Text>
                              <Text>{`It is ${immunization.classification} that you receive a ${immunization.title} ${immunization.timing}`}</Text>
                            </View>
                          </Card>
                        </View>
                      </TouchableHighlight>
                  );
                })}
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
