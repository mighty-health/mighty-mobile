import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import {Card, Header, Icon} from 'react-native-elements'
import * as Progress from 'react-native-progress';

export default class ImmunizationsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      immunizationData: [
        {
          title: "Flu Shot",
          subtitle: "Influenza (seasonal)",
          timing: "Once a year",
          due_date: "ASAP",
          prior_dates: [
            "09/28/2016",
            "03/07/2014",
            "03/18/2013",
            "06/07/2011",
            "06/30/2010",
            "06/02/2009",
            "05/16/2008"
          ],
          status: "pending",
          classification: "recommended",
          rank: 1,
          description: "Recent studies show that flu vaccination reduces the risk of flu illness by between 40% and 60%. It takes about two weeks after the vaccination for antibodies to develop in the body that protect against flu. CDC recommends that people get a flu vaccine by the end of October."
        },
        {
          title: "Td Booster",
          subtitle: "Tetanus/diphtheria",
          timing: "Once every 10 years",
          due_date: "09/28/2026",
          prior_dates: [
            "09/28/2016"
          ],
          status: "complete",
          classification: "recommended",
          rank: 2,
          description: "Vaccines are available that can help prevent tetanus, an infection caused by Clostridium tetani bacteria. Tetanus vaccination is recommended for all babies, children, teens, and adults. DTaP and DT are given to children younger than 7 years old, while Tdap and Td are given to older children and adults every 10 years."
        },
        {
          title: "HPV",
          subtitle: "Human papilloma virus",
          timing: "Only once",
          due_date: "-",
          prior_dates: [
            "05/16/2008"
          ],
          status: "complete",
          classification: "recommended",
          rank: 3,
          description: ""
        },
        {
          title: "Chickenpox",
          subtitle: "Varicella",
          timing: "Only once",
          due_date: "ASAP",
          prior_dates: null,
          status: "pending",
          classification: "recommended",
          rank: 4,
          description: ""
        },
        {
          title: "MMR",
          subtitle: "Measles, Mumps, Rubella",
          timing: "Only once",
          due_date: "ASAP",
          prior_dates: null,
          status: "pending",
          classification: "recommended",
          rank: 5,
          description: ""
        }
      ]
    };

    //
    // AsyncStorage.getItem('@MightyStore:patient_uuid', (err, patient_id) => {
    //
    //   fetch(`http://mighty-engine.appspot.com/api/v1/immunizations/?patient_id=${patient_id}`)
    //       .then((response) => response.json())
    //       .then((responseJSON) => {
    //         this.setState({immunizationData: responseJSON});
    //       });
    // });
  }

  render() {

    const alertColor = '#FF8A65';
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
              <Progress.Bar
                  color={alertColor}
                  progress={0.4}
                  width={300}/>
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
                            <View
                                style={{
                                  paddingLeft: 10,
                                }}>
                              <View
                                  style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                  }}>
                                <Text style={{
                                  paddingBottom: 10,
                                  fontWeight: 'bold',
                                  color: immunization.due_date == 'ASAP' ? alertColor : 'black'
                                }}>Due Date: {
                                  <Text style={{
                                    fontWeight: '300',
                                  }}>{immunization.due_date}</Text>}
                                </Text>
                                <Icon
                                    name={immunization.due_date == 'ASAP' ? 'error' : 'done'}
                                    color={immunization.due_date == 'ASAP' ? 'red' : 'green'}/>

                              </View>
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
