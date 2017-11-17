import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import {Card, Header, ButtonGroup} from 'react-native-elements'


export default class ImmunizationsPage extends Component<{}> {


  render() {
    const dummyDate = new Date();
    const dummyFormattedDate = `${dummyDate.getMonth() + 1}/${dummyDate.getDate()}/${dummyDate.getFullYear()}`;

    const immunizations = [
      {
        description: 'MUMPS',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'TETANUS',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'CHICKENPOX',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'MEASLES',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'HPV',
        lastDose: dummyDate,
        dueDate: dummyDate
      }
    ];

    const buttons = ['Book', 'Dismiss'];

    return (
        <View>
          <Header
              backgroundColor={'#4DE8E8'}
              // leftComponent={{icon: 'menu', color: '#fff'}}
              centerComponent={{text: 'Immunizations', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}
              // rightComponent={{icon: 'home', color: '#fff'}}
          />
          <ScrollView>
            {immunizations.map(
                (immunization, i) => {
                  return (<Card
                      containerStyle={{
                        padding: 10,
                        shadowOffset: {width: 1, height: 1,},
                        shadowColor: '#4DE8E8',
                        shadowOpacity: .2,
                      }}

                      key={i}
                      hideChevron={true}
                      title={immunization.description}
                      subtitle={"Hello"}>
                    <View style={{
                      paddingLeft: 20,
                      // paddingBottom: 30
                    }}>
                      <Text style={{fontWeight: 'bold', color: '#4d4d4d', paddingBottom: 5}}>Last Dose: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                      <Text style={{fontWeight: 'bold', color: 'red'}}>Due Date: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                    </View>
                  </Card>);
                })}
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }


});
