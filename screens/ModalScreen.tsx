import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Player from '../components/Player';
import {useRoute, RouteProp } from '@react-navigation/native';
import ModelVideo from '../model/Video';
import { useEffect, useState } from 'react';
import api from '../services/api';
import ChanelComponent from '../components/Chanel';


export default function ModalScreen() {
  let {id} = useRoute<RouteProp<{params:{id:number}}>>().params;
  const [video,setVideo] = useState<ModelVideo>();


  useEffect( ()=>{
    try {

      api.get(`/video/${id}`).then(data=>{
        let test:ModelVideo = data.data

        let {	id,
          title,
          description,
          keywords,
          embed,
        } = test 
  
        setVideo({
          id,
          title,
          description,
          keywords,
          embed
        })
        
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  function showChanel(){
    console.log(video);
    if(video){
      return  <ChanelComponent description={video.description} />
    }
  }

  return (
    <View style={styles.container}>
      <Player/>
    <View style={styles.filho2}>
      {showChanel()}
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
 * 
   api.get(`/video/${id}`).then(data=>{
        let video = data.data.videoList.map((model:ModelVideo)=>{
          let {	id,
            title,
            description,
            keywords,
            embed
          } = model 
          return {
            id,
            title,
            description,
            keywords,
            embed
          }
        })
        setVideo(video)
      })
 * 
 * 
*/