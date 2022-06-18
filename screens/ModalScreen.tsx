import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Player from '../components/Player';
import Chanel from '../components/Chanel';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Player/>
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