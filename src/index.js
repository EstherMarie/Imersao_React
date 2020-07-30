import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import Menu from './components/Menu';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (
	<div className="contender404">
		<Menu />
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
			<Route path="/" component={Home} exact />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route component={Pagina404} />
		</Switch>
	</BrowserRouter>,

	// <React.StrictMode>
	// </React.StrictMode>,
	document.getElementById('root')
);
