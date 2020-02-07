import React from 'react';
import { Provider } from "react-redux";

import { store } from "./store/store";

import Container from './components/Container';

const App = () => {
	return (
		<Provider
			store={ store }
		>
			<Container />
		</Provider>
	);
}

export default App;
