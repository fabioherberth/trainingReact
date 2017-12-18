import React from 'react';
import {Text, View} from 'react-native';

const Title = (props) => {
	const {estiloView, estiloText} = estilos;
	return (
		<View style={estiloView}>
			<Text style={estiloText}>{props.cText}</Text>
		</View>
	);
};

const estilos = {
	estiloView: {
		backgroundColor	: '#FF4500',
		justifyContent	: 'center',
		alignItems		: 'center',
		height			: 60,
		paddingTop		: 15,
		shadowColor		: '#000',
		shadowOffset	: { width: 0, height: 2 },
		shadowOpacity	: 0.2,
		elevation		: 2,
		position		: 'relative'
	},
	estiloText: {
		fontSize: 25
	}
};

export default Title;