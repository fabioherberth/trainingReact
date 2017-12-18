import React, {Component}	from 'react';
import {Text, View, Image}	from 'react-native';

class ItemsMenu extends Component{
	constructor(props) {
		super(props);
	}


	render() {
		const {imagemStyle, containerStyle} = estilos;
		return (
			<View style={containerStyle}>
				<Text>{this.props.list.cNomePrato}</Text>
				<Image style={imagemStyle} source={{ uri: this.props.list.cUrlImage }} />
			</View>
		);
	}

};

const estilos = {
	imagemStyle: {
		height: 300,
		width: 300
	},
	containerStyle: {
		alignItems: 'center',
		flexDirection: 'column'
	}
};

export default ItemsMenu;