import React, {Component} from 'react';
import {Card, Header, ListItem, Icon} from 'react-native-elements'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      summaryData: [{
        total_immunizations: 5,
        completed_immunizations: 2,
        total_screenings: 1,
        completed_screenings: 1,
        reminders: [
          {
            title: "Flu Shot",
            type: "Immunization",
            due_date: "ASAP"
          },
          {
            title: "Chickenpox",
            type: "Immunization",
            due_date: "ASAP"
          },
          {
            title: "MMR",
            type: "Immunization",
            due_date: "ASAP"
          },
          {
            title: "Annual Physical",
            type: "",
            due_date: "ASAP"
          }
        ]
      }]
    };
    //
    // AsyncStorage.getItem('@MightyStore:patient_uuid', (err, patient_id) => {
    //
    //   fetch(`http://mighty-engine.appspot.com/api/v1/summary/?patient_id=${patient_id}`)
    //       .then((response) => response.json())
    //       .then((responseJSON) => {
    //         this.setState({summaryData: [responseJSON]});
    //       });
    // });
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
        <View>
          <ScrollView>
            <Header
                backgroundColor={'#4DE8E8'}
                centerComponent={{text: 'Home', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}/>
            {
              this.state.summaryData.map((summary, i) => {

                let immunizationPercentage = summary.completed_immunizations / summary.total_immunizations * 100;
                let screeningPercentage = summary.completed_screenings / summary.total_screenings * 100;
                return (
                    <View key={i}>
                      <Card>
                        <View>
                          <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                            Reminders</Text>
                        </View>

                        {summary.reminders.map((reminder, j) => {
                          return (
                              <ListItem
                                  key={j}
                                  roundedAvatar
                                  hideChevron={true}
                                  title={`${reminder.title} ${reminder.type}`}
                                  leftIcon={{
                                    name: 'priority-high',
                                    color: '#FF8A65'
                                  }}>
                              </ListItem>
                          )
                        })}
                      </Card>
                      <Card>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate("Screenings")}><View>

                          <View>
                            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                              Screening Progress</Text>
                          </View>
                          <View style={{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 30,
                            paddingLeft: 22,
                            paddingBottom: 30
                          }}>
                            <ProgressCircle
                                percent={0}
                                radius={50}
                                borderWidth={8}
                                color="#FF8A65"
                                shadowColor="#FBE9E7"
                                bgColor="white">
                              <Text style={{fontSize: 18}}>{'0%'}</Text>
                            </ProgressCircle>
                            <Image
                                style={{width: 33, height: 29}}
                                source={require('./img/more.png')}/>
                          </View>
                        </View></TouchableHighlight>
                      </Card>
                      <Card>

                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate("Immunizations")}><View>
                          <View>
                            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                              Immunization Progress</Text>
                          </View>
                          <View style={{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 30,
                            paddingLeft: 22,
                            paddingBottom: 30
                          }}>
                            <ProgressCircle
                                percent={immunizationPercentage}
                                radius={50}
                                borderWidth={8}
                                color="#FF8A65"
                                shadowColor="#FBE9E7"
                                bgColor="white">
                              <Text style={{fontSize: 18}}>{immunizationPercentage + '%'}</Text>
                            </ProgressCircle>
                            <Image
                                style={{width: 33, height: 29}}
                                source={require('./img/more.png')}/>
                          </View>
                        </View></TouchableHighlight>
                      </Card>
                    </View>)
              })
            }
          </ScrollView>
        </View>)
  }
}