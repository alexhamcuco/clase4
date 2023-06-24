import React, { useState } from 'react';
import { getDocs, addDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import db from '../../../DB/firebase-config';
import { Button } from '@chakra-ui/react';

function Formulario() {



	const [nombreUsuario, setNombreUsuario] = useState('');
	const [edadUsuario, setEdadUsuario] = useState('');
	const [correoUsuario, setCorreoUsuario] = useState('');

	const colRef = collection(db, 'usuarios');

	// get collection data
	getDocs(colRef)
		.then((snapshot) => {
			let usuarios = [];
			snapshot.docs.forEach((doc) => {
				usuarios.push({ ...doc.data(), id: doc.id });
			});
			//cada vez que añades letra salta el console.log(usuarios)
			// console.log(usuarios);
		})
		.catch((err) => {
			console.log(err.message);
		});

	//busqueda de una palabra en los materiales



	//

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log('Nombre: ', nombreUsuario);
		console.log('Edad: ', edadUsuario);
		console.log('Correo: ', correoUsuario);

		// agregar nuevo usuario
		addDoc(colRef, {
			nombre: nombreUsuario,
			edad: edadUsuario,
			correo: correoUsuario,
		})
			.then(() => {
				console.log('Usuario agregado correctamente');
				setNombreUsuario('');
				setEdadUsuario('');
				setCorreoUsuario('');

			})
			.catch((error) => {
				console.log('Error al agregar el usuario:', error);
			});
	};

	return (
		<div>
			<form className='add' onSubmit={handleSubmit}>
				<label htmlFor='nombreUsuario'>Nombre:</label>
				<input
					type='text'
					id='nombreUsuario'
					name='nombreUsuario'
					required
					value={nombreUsuario}
					onChange={(event) => setNombreUsuario(event.target.value)}
				/>
				<br />
				<label htmlFor='edadUsuario'>Edad:</label>
				<input
					type='text'
					id='edadUsuario'
					name='edadUsuario'
					required
					value={edadUsuario}
					onChange={(event) => setEdadUsuario(event.target.value)}
				/>
				<br />
				<label htmlFor='correoUsuario'>Correo:</label>
				<input
					type='text'
					id='correoUsuario'
					name='correoUsuario'
					required
					value={correoUsuario}
					onChange={(event) => setCorreoUsuario(event.target.value)}
				/>
				<br />
				<Button type='submit'>Nuevo usuario</Button>
			</form>
		</div>
	);
}

export default Formulario;