import React, {Component}				from 'react';
import {View,
		ScrollView,
		Image,
		Text,
		ToastAndroid}	from 'react-native';
import ItemsMenu						from './itens-menu';

class Menu extends Component {
	state = {opcoes:[{	"iCodPrato" : "0",
						"cNomePrato": "Carregando....",
						"cUrlImage" : ""
					 }]};

	urlDaApi = 'https://raw.githubusercontent.com/fabioherberth/trainingReact/master/server.json';

	componentWillMount(){
		this.carregarMenu();
	};

	carregarMenu(){
		fetch(this.urlDaApi)
		.then(
			response => response.json()
			.then(
				data=>{this.setState({lista:data});
			})
		).catch(
			erro=>{ToastAndroid.show('Falha na comunicação com o servidor!', ToastAndroid.SHORT)}
		);
	};

	remover(itens){
		let listAux = this.state.lista.slice(0);
		let index	= listAux.indexOf(itens);
		listAux.splice(index, 1);
		this.setState({lista:listAux});
	};

	renderItens(){
		const {imagemStyle, containerStyle} = estilos;
		return this.state.lista.map(
			(itens)=>
			<View style={containerStyle} key={itens.iCodPrato}>
				<ItemsMenu list={itens}/>
				<ButtonCuston onPress={()=>{this.remover(itens);}}>Remover</ButtonCuston>
			</View>
		);
	};

	render(){
		return(
			<ScrollView>
				{this.renderItens()}
			</ScrollView>
		);
	};
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

export default Menu;