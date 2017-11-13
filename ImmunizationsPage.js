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
    const dummyFormattedDate = `${dummyDate.getFullYear()}/${dummyDate.getMonth() + 1}/${dummyDate.getDate()}`;

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
              leftComponent={{icon: 'menu', color: '#fff'}}
              centerComponent={{text: 'Immunizations', style: {color: '#fff'}}}
              rightComponent={{icon: 'home', color: '#fff'}}
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
                      paddingLeft: 20
                    }}>
                      <Text style={{fontWeight: '600', color: '#808080'}}>Last Dose: {dummyFormattedDate}</Text>
                      <Text style={{fontWeight: '800', color: '#808080'}}>Due Date: {dummyFormattedDate}</Text>
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
