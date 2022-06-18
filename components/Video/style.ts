import { StyleSheet } from "react-native";

const style = StyleSheet.create({
	container:{
		height: 200,
		backgroundColor:'grey',
		margin:14,
		display:'flex',
		flexDirection:'column',
	},
	image: {
		display:'flex',
		margin: 'auto',
		flex: 4,
		height: '100%',
		width: '100%'

	},

	title: {
		flex: 1,
		fontWeight:'bold',
		color:'000',
		textDecorationLine: "underline",
		backgroundColor:'#F2F2F2',
		alignItems:'center',
		textAlign:"center",
		justifyContent:"center",
		padding: 10

	}

})


export default style;