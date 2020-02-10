import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import ReactGA from 'react-ga';

import { store } from "./store/store";

import Container from './components/Container';

const App = () => {

	useEffect(() => {

		document.title = "React Random Jokes";

		ReactGA.initialize('UA-96537243-4');
		ReactGA.pageview("/");
	}, []);

	return (
		<Provider
			store={ store }
		>
			<Container />
		</Provider>
	);
}

export default App;
