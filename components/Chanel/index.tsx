import { useState } from "react";
import { Button, Text, View,Image, TouchableOpacity, ScrollView } from "react-native";
import Chanel from "../../model/Chanel";
import style from "./style";



export default function ChanelComponent (){
	const [showAbout,setShowAbout] = useState(false)
	const [messageAbout,setMessageAbout] = useState(false)

	const chanel:Chanel = {
		followers:1000,
		name:"RNP",
		logo:"https://cloud.estacaonerd.com/wp-content/uploads/2021/07/20194445/gkpb-campus-party.jpg",
		about:"	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		statusSubscription:false
	}
	
	let message:string = chanel.statusSubscription ? "Inscrito" : "Inscreva-se"

	function alterAbout() {
		setShowAbout(!showAbout);
	}
	


	function showAboutText(){
		if(showAbout) return 	<Text style={style.about}>{chanel.about}</Text>
		else return null
	}

	return (
		<ScrollView style={style.container}>
			<View style={style.groupInformation}>
				<View style={style.cardInformation}>
					<Image style={style.logo} source={
						{
							uri:chanel.logo
						}
					} />
					<View style={style.groupInformationText}>
						<Text style={style.titleChanel}>{chanel.name}</Text>
						<Text>{chanel.followers} seguidores</Text>
					</View>
				</View>
					<TouchableOpacity style={style.StatusButon}>
						<Text style={style.textColor}>{message}</Text>
					</TouchableOpacity>
			</View>
			<View style={style.showMore}>
					<TouchableOpacity onPress={alterAbout}>
						{
							!showAbout? <Text style={style.textColorLink}>Mostrar mais</Text>: <Text style={style.textColorLink}>Mostrar menos</Text>
						}
					</TouchableOpacity>
					{
					showAboutText()
					}
			</View>
		</ScrollView>
	)
}