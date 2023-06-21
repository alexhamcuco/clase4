import React, { useState } from 'react';
import { getDocs, addDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import db from '../../../DB/firebase-config';
import { Button, Input } from '@chakra-ui/react';

function Formulario() {
    const [nivelMaterial, setNivelMaterial] = useState('');
    const [tipoMaterial, setTipoMaterial] = useState('');
    const [tituloMaterial, setTituloMaterial] = useState('');
    const [urlMaterial, setUrlMaterial] = useState('');
    const [urlTituloMaterial, setUrlTituloMaterial] = useState('');
    const [fechaMaterial, setFechaMaterial] = useState('');

    const colRefMateriales = collection(db, 'materiales');

    // get collection data
    getDocs(colRefMateriales)
        .then((snapshot) => {
            let materiales = [];
            snapshot.docs.forEach((doc) => {
                materiales.push({ ...doc.data(), id: doc.id });
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

        console.log('Nivel Material: ', nivelMaterial);
        console.log('Tipo Material: ', tipoMaterial);
        console.log('Titulo Material: ', tituloMaterial);
        console.log('Url Material: ', urlMaterial);
        console.log('Url Titulo Material: ', urlTituloMaterial);
        console.log('Fecha Material: ', fechaMaterial);


        // agregar nuevo usuario
        addDoc(colRefMateriales, {
            nivel: nivelMaterial,
            tipo: tipoMaterial,
            titulo: tituloMaterial,
            url: urlMaterial,
            urlTitulo: urlTituloMaterial,
            fecha: fechaMaterial,
        })
            .then(() => {
                console.log('material agregado correctamente');
                setNivelMaterial('');


            })
            .catch((error) => {
                console.log('Error al agregar el material:', error);
            });
    };

    return (
        <div>
            <form className='add' onSubmit={handleSubmit}>
                <label htmlFor='nivelMaterial'>Nivel: </label>
                <Input htmlSize={4} width='auto'
                    type='text'
                    id='nivelMaterial'
                    name='nivelMaterial'
                    required
                    value={nivelMaterial}
                    onChange={(event) => setNivelMaterial(event.target.value)}
                />
                <br />

                <label htmlFor='tipoMaterial'>Tipo: </label>
                <Input htmlSize={4} width='auto'
                    type='text'
                    id='tipoMaterial'
                    name='tipoMaterial'
                    required
                    value={tipoMaterial}
                    onChange={(event) => setTipoMaterial(event.target.value)}
                />
                <br />  <label htmlFor='tituloMaterial'>Titulo: </label>
                <Input htmlSize={4} width='auto'
                    type='text'
                    id='tituloMaterial'
                    name='tituloMaterial'
                    required
                    value={tituloMaterial}
                    onChange={(event) => setTituloMaterial(event.target.value)}
                />
                <br />  <label htmlFor='urlMaterial'>Url: </label>
                <Input htmlSize={4} width='auto'
                    type='text'
                    id='urlMaterial'
                    name='urlMaterial'
                    required
                    value={urlMaterial}
                    onChange={(event) => setUrlMaterial(event.target.value)}
                />
                <br />  <label htmlFor='urlTituloMaterial'> Url Titulo: </label>
                <Input htmlSize={4} width='auto'
                    type='text'
                    id='urlTituloMaterial'
                    name='urlTituloMaterial'
                    required
                    value={urlTituloMaterial}
                    onChange={(event) => setUrlTituloMaterial(event.target.value)}
                />
                <br />  <label htmlFor='fechaMaterial'>Fecha: </label>
                <Input htmlSize={4} width='auto'
                    type='datetime-local'
                    id='fechaMaterial'
                    name='fechaMaterial'
                    required
                    value={fechaMaterial}
                    onChange={(event) => setFechaMaterial(event.target.value)}
                />
                <br />

                <Button type='submit'>Nuevo  Material</Button>
            </form>
        </div>
    );
}

export default Formulario;