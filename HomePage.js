import React, {Component} from 'react';
import Button from 'apsl-react-native-button'
import {Card, Header, ButtonGroup, CheckBox} from 'react-native-elements'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';
import * as Progress from 'react-native-progress';

export default class HomePage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <ScrollView>
            <Header
                backgroundColor={'#4DE8E8'}
                centerComponent={{text: 'Home', style: {color: '#fff', fontWeight: 'bold', fontSize: 24}}}/>
            <View>
              <Card>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                    ScreeningProgress</Text>
                </View>
                <View style={{
                  paddingTop: 30,
                  paddingLeft: 22,
                  paddingBottom: 30
                }}>
                  <Progress.Bar progress={0.7} width={250} borderRadius={5} color={'#FF8A65'}/>
                </View>
                <Button style={{backgroundColor: '#FF8A65', borderColor:'#FF8A65',width: 150, marginLeft: 90, marginTop: 10}}
                        textStyle={{fontSize: 18, color: 'white'}}
                        onPress={() => this.props.navigation.navigate("Screenings")}>Details
                </Button>
              </Card>
              <Card>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                    Immunization Progress</Text>
                </View>
                <View style={{
                  paddingTop: 30,
                  paddingLeft: 22,
                  paddingBottom: 30
                }}>
                  <Progress.Bar progress={0.5} width={250} borderRadius={5} color={'#FF8A65'}/>
                </View>
                <Button style={{backgroundColor: '#FF8A65', borderColor:'#FF8A65',width: 150, marginLeft: 90, marginTop: 10}}
                        textStyle={{fontSize: 18, color: 'white'}}
                        onPress={() => this.props.navigation.navigate("Immunizations")}>Details
                </Button>
              </Card>
              <Card>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize: 24, textAlign: 'center'}}>
                    Health Metrics Progress</Text>
                </View>
                <View style={{
                  paddingTop: 30,
                  paddingLeft: 22,
                  paddingBottom: 30
                }}>
                  <Progress.Bar progress={0.9} width={250} borderRadius={5} color={'#FF8A65'}/>
                </View>
                <Button style={{backgroundColor: '#FF8A65',borderColor:'#FF8A65', width: 150, marginLeft: 90, marginTop: 10}}
                        textStyle={{fontSize: 18, color: 'white'}}
                        onPress={() => this.props.navigation.navigate("Screenings")}>Details
                </Button>
              </Card>
            </View>
          </ScrollView>
        </View>)
  }
}