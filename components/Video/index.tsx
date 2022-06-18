import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import rnp from '../../assets/images/logo.png'
import ModelVideo from '../../model/Video'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Video(video:ModelVideo){
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={style.container} 
		onPress={() => navigation.navigate('Modal')}
		>
			<Image source={rnp} style ={style.image}
			 />
			<Text style={style.title}>{video.title}</Text>
	</TouchableOpacity>
	)
}
/*
<TouchableOpacity style={style.container}>
<Image source={rnp}/>
<Text style={style.title}>{video.title}</Text>
</TouchableOpacity>/*

*/