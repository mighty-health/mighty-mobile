import React, {Component} from 'react';


import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Platform,
  TextInput,
  AsyncStorage
} from 'react-native';

export default class LoginPage extends Component<{}> {


  constructor(props) {
    super(props);

    this.state = {
      number: "",
      ready: false
    };
  }

  async submit() {

    try {
      await AsyncStorage.setItem('@MightyStore:patient_uuid', this.state.number);
    } catch (error) {
    }

    this.props.navigation.navigate("Main");
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput
              maxLength={36}
              style={{width: 375, textAlign: 'center', fontSize: 14}}
              placeholder="Enter Your Patient ID"
              value={this.state.number}/>

          <Button disabled={false}
                  title={"Login"}
                  onPress={() => this.submit()}/>
        </View>)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
