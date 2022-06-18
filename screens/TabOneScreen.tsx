import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Video from '../components/Video';
import ModelVideo from '../model/Video';
import { RootTabScreenProps } from '../types';
import mg from '../assets/images/logo.png';
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
  const video:ModelVideo = {
    id: 57093,
    title: "Álcool: história, produção e questão ambiental",
    description: "Projeto apresentado na FEBRACE 2008, na área de Ciências Exatas e da Terra. Autores: Luiz Eduardo Poublan de Mattos Fabio dos Santos Cagido Tainah da Silva Teixeira Márcio Viveiros Vieira (Orientador) Centro Federal de Educação Tecnológica de Química de Nilópolis - Unidade Maracanã - RJ",
    keywords: "EXA209 ",
  }

  function showVideos(){
    console.log(videos)
    return videos.map((video:ModelVideo, index:number)=>{
      return <Video key={index} 
      description={video.description}
      id={video.id}
      keywords={video.keywords}
      title={video.title}
      />
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
