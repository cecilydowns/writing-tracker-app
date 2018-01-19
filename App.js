import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'bree-serif':
        require('./assets/fonts/BreeSerif-Regular.ttf')
    });
    this.setState({ fontLoaded: true })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          {this.state.fontLoaded ? (
          <Text style={styles.siteTitle}>Writing Tracker</Text>
          ) : null }
        </View>
        <View style={styles.content}>
          <Text>Hello World!</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    padding: 15,
    paddingTop: 25,
    backgroundColor: '#8ccbdb',
    alignSelf: 'stretch'
  },
  siteTitle: {
    fontWeight: 'bold',
    fontSize: 25
  },
  content: {
    flex: 1
  }

});
