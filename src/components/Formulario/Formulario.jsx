import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../DB/firebase-config';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function Formulario() {
	const [nombreUsuario, setNombreUsuario] = useState('');
	const [edadUsuario, setEdadUsuario] = useState('');
	const [correoUsuario, setCorreoUsuario] = useState('');
	const [mostrarMensaje, setMostrarMensaje] = useState(false);

	const colRef = collection(db, 'usuarios');

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log('Nombre: ', nombreUsuario);
		console.log('Edad: ', edadUsuario);
		console.log('Correo: ', correoUsuario);

		// Agregar nuevo usuario
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
				setMostrarMensaje(true);

			})
			.catch((error) => {
				console.log('Error al agregar el usuario:', error);
			});
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '33%', marginTop: '50px', marginBottom: '50px' }}>
				<form className="add" onSubmit={handleSubmit}>
					<VStack spacing={4} backgroundColor="gray.700" p={4} borderRadius="md">
						<FormControl>
							<FormLabel htmlFor="nombreUsuario">Nombre:</FormLabel>
							<Input
								type="text"
								id="nombreUsuario"
								name="nombreUsuario"
								required
								value={nombreUsuario}
								onChange={(event) => setNombreUsuario(event.target.value)}
								backgroundColor="white"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="edadUsuario">Edad:</FormLabel>
							<Input
								type="text"
								id="edadUsuario"
								name="edadUsuario"
								required
								value={edadUsuario}
								onChange={(event) => setEdadUsuario(event.target.value)}
								backgroundColor="white"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="correoUsuario">Correo:</FormLabel>
							<Input
								type="text"
								id="correoUsuario"
								name="correoUsuario"
								required
								value={correoUsuario}
								onChange={(event) => setCorreoUsuario(event.target.value)}
								backgroundColor="white"
							/>
						</FormControl>
						<Button type="submit" backgroundColor="gray.500" color="white">
							Enviar
						</Button>
					</VStack>
				</form>
				{mostrarMensaje && (
					<div style={{ backgroundColor: 'green', padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
						<h6>¡GRACIAS!</h6>

					</div>
				)}
			</div>
		</div>
	);
}

export default Formulario;
