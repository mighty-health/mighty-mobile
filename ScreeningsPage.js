import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  AsyncStorage
} from 'react-native';
import {Card, Header, ListItem, Icon} from 'react-native-elements'
import * as Progress from 'react-native-progress';

export default class ScreeningsPage extends Component {


  constructor(props) {
    super(props)
    this.state = {screeningData: []};

    //
    // AsyncStorage.getItem('@MightyStore:patient_uuid', (err, patient_id) => {
    //   fetch(`http://mighty-engine.appspot.com/api/v1/screenings/?patient_id=${patient_id}`)
    //       .then((response) => response.json())
    //       .then((responseJSON) => {
    //         this.setState({screeningData: responseJSON});
    //       });
    // });


    this.state = {
      screeningData: [
        {
          title: "Annual Physical",
          status: "complete",
          timing: "Every years",
          due_date: "06/14/2017",
          most_recent_date: "06/14/2016",
          observations: [
            {
              name: "Height",
              value: "185",
              unit: "cm"
            },
            {
              name: "Weight",
              value: "77.1",
              unit: "kg"
            },
            {
              name: "Blood Pressure",
              value: "120/80",
              unit: "mmHg"
            }
          ],
          rank: 1,
          description: ""
        }]
    };

  }

  render() {
    const {navigate} = this.props.navigation;
    const dummyDate = new Date();
    const dummyFormattedDate = `${dummyDate.getMonth() + 1}/${dummyDate.getDate()}/${dummyDate.getFullYear()}`;

    const checked = true;
    const notChecked = false;

    return (
        <View>
          <Header
              backgroundColor={'#4DE8E8'}
              centerComponent={{text: 'Screenings', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}/>
          <ScrollView>
            <View style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 20
            }}>

              <Progress.Bar
                  color={'#FF8A65'}
                  progress={0.01}
                  width={300}/>
            </View>

            {this.state.screeningData.map(
                (screening, i) => {
                  return (<Card
                          containerStyle={{
                            padding: 10,
                            shadowOffset: {width: 1, height: 1,},
                            shadowColor: '#4DE8E8',
                            shadowOpacity: .2,
                          }}
                          key={i}
                          hideChevron={true}
                          title={screening.title}>

                        <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start'
                            }}>
                          
                          <View style={{
                            paddingLeft: 20,
                            paddingBottom: 30
                          }}>
                            <Text style={{fontWeight: 'bold', color: '#4d4d4d', paddingBottom: 5}}>Last Performed: {
                              <Text style={{fontWeight: '300'}}>{screening.most_recent_date}</Text>}
                            </Text>
                            <Text style={{fontWeight: 'bold', color: '#FF8A65', paddingBottom: 5}}>Due Date: {
                              <Text style={{fontWeight: '300'}}>{screening.due_date}</Text>}
                            </Text>
                          </View>

                          <Icon
                              name='error'
                              color='red'
                          />
                        </View>
                        {/*<CheckBox*/}
                        {/*center*/}
                        {/*title='Done'*/}
                        {/*checked={checked}*/}
                        {/*checkedColor='#4DE8E8'*/}
                        {/*/>*/}
                        {screening.observations.map((observation, i) => (
                            <ListItem key={i}
                                      hideChevron={true}
                                      title={
                                        `${observation.name}: ${observation.value} ${observation.unit}`
                                      }/>))}
                      </Card>
                  );
                })}
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});