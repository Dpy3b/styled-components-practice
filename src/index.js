import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'PragmataPro';
	}
`;

const theme = {
	colors: {
		primary: 'crimson',
		secondary: 'coral'
	},
	media: {
		phone: '(max-width: 425px)',
		tablet: '(max-width: 768px) and (min-width: 425px)'
	}
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
