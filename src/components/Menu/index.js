import React from 'react';
import Logo from '../../assets/img/AlniCraft.png';
import './Menu.css';

function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={Logo} alt="AlniCraft Logo" />
			</a>
		</nav>
	);
}

export default Menu;
