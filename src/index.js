import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
	return <div>Página de Cadastro de Vídeo</div>;
}

const Pagina404 = () => (
	<div className="contender404">
		<h3>Eita!</h3>
		<p>Parece que esta página não existe...</p>
		<p>Que tal jogar um joguinho supimpa feito na Imersão GameDev? :)</p>
		<iframe
			style={{ width: '80vw', height: '40vh' }}
			src="https://editor.p5js.org/Alni/embed/ccP0Z9meS"></iframe>
	</div>
);

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/" component={App} exact />
			<Route component={Pagina404} />
		</Switch>
	</BrowserRouter>,

	// <React.StrictMode>
	// </React.StrictMode>,
	document.getElementById('root')
);
