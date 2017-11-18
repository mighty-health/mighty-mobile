import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';
import {Card, Header, ButtonGroup, CheckBox, ListItem} from 'react-native-elements'
import * as Progress from 'react-native-progress';

export default class ScreeningsPage extends Component {


  constructor(props) {
    super(props)
    this.state = {screeningData: []};
  }

  render() {
    const {navigate} = this.props.navigation;
    const dummyDate = new Date();
    const dummyFormattedDate = `${dummyDate.getMonth() + 1}/${dummyDate.getDate()}/${dummyDate.getFullYear()}`;
    const screenings = [
      {
        title: "Type-2 Diabetes Screening",
        status: "complete",
        timing: "Every X years",
        due_date: "MM/DD/YYYY",
        most_recent_date: "MM/DD/YYYY",
        observations: [
          {
            name: "Glucose",
            value: "115",
            unit: "mg/dL"
          },
          {
            name: "Glucose",
            value: "115",
            unit: "mg/dL"
          }
        ],
        rank: 1,
        description: ""
      }
    ];

    const checked = true;
    const notChecked = false;

    const patient_id = "a33d3135-2c7a-43ad-8804-3c2d3f492253";

    fetch(`http://mighty-engine.appspot.com/api/v1/screenings/?patient_id=${patient_id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
          this.setState({screeningData: responseJSON});
        });


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
                      title={screening.title}
                      subtitle={"Hello"}>
                    <View style={{
                      paddingLeft: 20,
                      paddingBottom: 30
                    }}>
                      <Text style={{fontWeight: 'bold', color: '#4d4d4d', paddingBottom: 5}}>Last Performed: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>
                    </View>

                    <CheckBox
                        center
                        title='Done'
                        checked={checked}
                        checkedColor='#4DE8E8'
                    />
                    {screening.observations.map((observation, i) => (
                        <ListItem key={i} title={
                          `${observation.name}: ${observation.value} ${observation.unit}`
                        }/>))}
                  </Card>);
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