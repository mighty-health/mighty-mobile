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
        description: 'Hepatitis',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'Tetanus',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'Chickenpox',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'Measles',
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
              backgroundColor={'#4DD0E1'}
              // leftComponent={{icon: 'menu', color: '#fff'}}
              centerComponent={{text: 'Immunizations', style: {color: '#fff', fontWeight: '600', fontSize: 22}}}
              // rightComponent={{icon: 'home', color: '#fff'}}
          />
          <ScrollView>
            {immunizations.map(
                (immunization, i) => {
                  return (<Card
                      containerStyle={{
                        padding: 10
                      }}
                      key={i}
                      hideChevron={true}
                      title={immunization.description}
                      subtitle={"Hello"}>
                    <View style={{
                      paddingLeft: 20,
                      paddingBottom: 20
                    }}>
                      <Text style={{fontWeight: 'bold', color: '#4d4d4d'}}>Last Dose: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                      <Text style={{fontWeight: 'bold', color: '#4d4d4d'}}>Due Date: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                    </View>
                    <ButtonGroup
                        buttons={buttons}
                        containerStyle={{height: 50}}/>
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
