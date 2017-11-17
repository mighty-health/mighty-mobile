import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';
import {Card, Header, ButtonGroup, CheckBox} from 'react-native-elements'
import * as Progress from 'react-native-progress';
export default class ScreeningsPage extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    const dummyDate = new Date();
    const dummyFormattedDate = `${dummyDate.getMonth() + 1}/${dummyDate.getDate()}/${dummyDate.getFullYear()}`;
    const screenings = [
      {
        description: 'ANNUAL PHYSICAL',
        lastDose: "02/12/2017",
        dueDate: "12/13/2017"
      },
      {
        description: 'TYPE-2 DIABETES SCREENINGS',
        lastDose: dummyDate,
        dueDate: dummyDate
      },
      {
        description: 'DENTAL EXAMINATION',
        lastDose: dummyDate,
        dueDate: dummyDate
      }
    ];

    const buttons = ['Book', 'Dismiss'];
    const checked = true;
    const notChecked = false;

    return (
        <View>
          <Header
              backgroundColor={'#4DE8E8'}
              // leftComponent={{icon: 'menu', color: '#fff'}}
              centerComponent={{text: 'Screenings', style: {color: '#fff', fontWeight: 'bold', fontSize:24}}}
              // rightComponent={{icon: 'home', color: '#fff'}}
          />
          <ScrollView>
          <View>
            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize:24, textAlign:'center'}}>Your Progress</Text>
          </View>
          <View style={{
                      paddingTop: 10,
                      paddingLeft: 60,
                      paddingBottom: 30
                    }}>

          <Progress.Bar progress={0.7} width={300} borderRadius={5} color={'#FF8A65'} />
          </View>
            {screenings.map(
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
                      title={screening.description}
                      subtitle={"Hello"}>
                    <View style={{
                      paddingLeft: 20,
                      paddingBottom: 30
                    }}>
                      <Text style={{fontWeight: 'bold', color: '#4d4d4d', paddingBottom: 5}}>Last Dose: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                      <Text style={{fontWeight: 'bold', color: '#4d4d4d'}}>Due Date: {
                        <Text style={{fontWeight: '300'}}>{dummyFormattedDate}</Text>}
                      </Text>

                    </View>
                    <CheckBox
                      center
                      title='Done'
                      checked={checked}
                      checkedColor='#4DE8E8'
                    />
                    <CheckBox
                      center
                      title='Show Detail'
                      iconType='material'
                      checkedIcon='clear'
                      uncheckedIcon='remove'
                      checkedColor='#FF8A65'
                      checked={notChecked}
                      onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
                      onPress={() => this.props.navigation.navigate("ScreeningDetail")}
                    />
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