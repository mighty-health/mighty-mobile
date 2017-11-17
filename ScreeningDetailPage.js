import React, {Component} from 'react';
//import {Button} from 'react-native-elements'
import Button from 'apsl-react-native-button'
import {Card, Header, ButtonGroup, CheckBox} from 'react-native-elements'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';
export default class ScreeningDetailPage extends Component<{}> {
	render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize:24, textAlign:'center', paddingTop:20}}>PYSICAL SCREENING DETAILS</Text>
      	<Card>
      		<Text>1. Laboratory Tests</Text>
      		<Text>2. Chest X-Rays</Text>
      		<Text>3. Heart Stress Tests</Text>
      	</Card>
      	<Button style={{backgroundColor: '#FF8A65', width: 100, marginLeft:150, marginTop:20}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("Screenings")}>
  			BACK
		</Button>
      </View>
     )
   }
}