import React, { useRef, useState } from "react";
import { Dimensions,Text,View } from "react-native";
import style from "./style";
//import { Audio, Video } from 'expo-av';
import { Audio, Video } from 'expo-av';


export default function Players (){
	const video = useRef(null);
	const url =  'https://dev.eduplay.rnp.br/portal/video/embed/61601'
  const [status, setStatus] = React.useState({});

	return (
		<View style={style.containerPlayer}>
			<Video  ref={video}
        source={{
          uri: url,
					headers: {Accept: 'application/json', 'Content-Type': 'application/json',}

        }}
				style={
					{flex: 1,
					width:'100%',
					height:'100%',

					}
				}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)} />
		</View>
	)
	
}

/*

*/