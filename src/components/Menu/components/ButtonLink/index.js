import React from 'react';

function ButtonLink(props) {
	// props => { className: "o que alguém passar", href:"/" }
	console.log(props);

	return (
		<a className={props.className} href={props.href}>
			Novo vídeo
		</a>
	);
}

export default ButtonLink;
