import { Image, ScrollView, StyleSheet } from 'react-native';

import Video from '../components/Video';
import ModelVideo from '../model/Video';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import api from '../services/api';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [videos,setVideos] = useState<ModelVideo[]>([]);

  useEffect( ()=>{
    try {
      api.get('/video').then(data=>{
        let mapavideo = data.data.videoList.map((model:ModelVideo)=>{
          let {	id,
            title,
            description,
            keywords} = model 
          return {
            id,
            title,
            description,
            keywords
          }
        })
        setVideos([...mapavideo])
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  function showVideos(){
    return videos.map((video:ModelVideo, index:number)=>{
      return <Video key={index}
      description={video.description}
      id={video.id}
      keywords={video.keywords}
      title={video.title} embed={''} />
    })
  }


  return (
    <ScrollView style={styles.container}>
      {showVideos()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'fff'

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
