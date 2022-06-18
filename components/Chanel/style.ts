import { StyleSheet } from "react-native";

const style = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor:'white',
		flexDirection:'column',
		padding: 2,
		gap: 8
	},


	groupInformation: {
		flex: 1,
		flexDirection:"row",
		justifyContent:"space-between",
		padding: 8
	},
	
	groupInformationText:{
		flexDirection:'column',
		margin: 0
	},

		
	cardInformation:{
		flexDirection:'row',
		margin: 0,
		gap: 10
	},

	logo:{
		width: 30,
		height: 30,
		borderRadius: 15,
	},

	titleChanel:{
			fontSize:16,
			fontWeight:'bold',
		},

	followers:{
		fontSize: 10,
		marginTop: -4
	},

	StatusButon:{
		fontSize:12,
		backgroundColor:'#f49635',
		padding: 4,
		color: '#fff',
		height: 38,
		justifyContent: 'center',
		alignItems:	'center'

	},

	showMore: {
		flex: 1,
		color: 'black',
		borderColor:'white',
		padding: 1,
		justifyContent:'center',
		alignItems:'center'
	},

	textColor:{
		color:'#fff',
		marginLeft: 8,
		marginRight: 8
	},

	textColorLink:{
		color:'000',
		textDecorationLine: "underline",
		fontWeight: "700"

	},
	about: {
		textAlign:'justify',
		padding: 8,
		fontWeight: "500",
	}
})



export default style;


/*


	chanelDefinition: {
		flex: 1,
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor:'red',
	},




	button:{
		backgroundColor:'red',
		textTransform:'lowercase'
		
	},



*/