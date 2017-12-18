import React		from 'react';
import {Text, View} from 'react-native';
import Title		from './src/component/title';
import Menu			from './src/component/menu';

const MainBodyApp = () =>{
	return(
		<View>
			<Title cText={'Menu'}/>
			<Menu/>
		</View>
	);
};

export default MainBodyApp;