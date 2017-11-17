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

export default class HomePage extends Component<{}> {
	render() {
    const {navigate} = this.props.navigation;
    return (
    <ScrollView>
    	<Header
              backgroundColor={'#4DE8E8'}
              // leftComponent={{icon: 'menu', color: '#fff'}}
              centerComponent={{text: 'Welcome', style: {color: '#fff', fontWeight: 'bold', fontSize:24}}}
              // rightComponent={{icon: 'home', color: '#fff'}}
          />
       <View>
       	<Card>
       	<View>
            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize:24, textAlign:'center'}}>Screening Progress</Text>
         </View>
       	<View style={{
            paddingTop: 30,
            paddingLeft: 30,
            paddingBottom: 30
         }}>
        <Progress.Bar progress={0.7} width={300} borderRadius={5} color={'#FF8A65'} />
        </View>
        <Button style={{backgroundColor: '#FF8A65', width: 150, marginLeft:100, marginTop:10}} textStyle={{fontSize: 18, color:'white'}} onPress={() => this.props.navigation.navigate("Screenings")}>
  			DETAILS
		</Button>
       </Card>
       <Card>
       	<View>
            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize:24, textAlign:'center'}}>Immunization Progress</Text>
         </View>
       	<View style={{
            paddingTop: 30,
            paddingLeft: 30,
            paddingBottom: 30
         }}>
        <Progress.Bar progress={0.5} width={300} borderRadius={5} color={'#FF8A65'} />
        </View>
        <Button style={{backgroundColor: '#FF8A65', width: 150, marginLeft:100, marginTop:10}} textStyle={{fontSize: 18, color:'white'}} onPress={() => this.props.navigation.navigate("Immunizations")}>
  			DETAILS
		</Button>
       </Card>
       <Card>
       	<View>
            <Text style={{fontWeight: 'bold', color: '#4d4d4d', fontSize:24, textAlign:'center'}}>Health Matircs Progress</Text>
         </View>
       	<View style={{
            paddingTop: 30,
            paddingLeft: 30,
            paddingBottom: 30
         }}>
        <Progress.Bar progress={0.9} width={300} borderRadius={5} color={'#FF8A65'} />
        </View>
        <Button style={{backgroundColor: '#FF8A65', width: 150, marginLeft:100, marginTop:10}} textStyle={{fontSize: 18, color:'white'}} onPress={() => this.props.navigation.navigate("Screenings")}>
  			DETAILS
		</Button>
       </Card>
       </View>
      </ScrollView>
     )
   }
}