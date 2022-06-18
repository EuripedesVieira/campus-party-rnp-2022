import { StyleSheet, Text,View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Chanel from '../components/Chanel';
import Player from '../components/Player';
import Recommendation from '../components/Recommendation';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.filho2}>
        <Player/>
      </View>
      <View style={styles.filho2}>
        <Chanel/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },

  filho1: {
    flex: 1,
    backgroundColor:'red'
  },
  filho2: {
    flex: 3,
    backgroundColor:'blue'

  },

  filho3: {
    flex: 4,
    backgroundColor:'blue'

  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


/**
  <View style={styles.filho1}>
        <Chanel/>
      </View>
      <View style={styles.filho3}></View>
*/ 