import React, {Component} from 'react';
import {Card, Header, ButtonGroup, CheckBox} from 'react-native-elements'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

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
                        percent={30}
                        radius={50}
                        borderWidth={8}
                        color="#FF8A65"
                        shadowColor="#FBE9E7"
                        bgColor="white">
                      <Text style={{fontSize: 18}}>{'30%'}</Text>
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
                        percent={70}
                        radius={50}
                        borderWidth={8}
                        color="#FF8A65"
                        shadowColor="#FBE9E7"
                        bgColor="white">
                      <Text style={{fontSize: 18}}>{'70%'}</Text>
                    </ProgressCircle>
                    <Image
                        style={{width: 33, height: 29}}
                        source={require('./img/more.png')}/>
                  </View>
                </View></TouchableHighlight>
              </Card>
            </View>
          </ScrollView>
        </View>)
  }
}