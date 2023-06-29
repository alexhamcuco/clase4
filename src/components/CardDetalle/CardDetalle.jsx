//este el es componente de vista individual

import React, { useState, useEffect } from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import db from "../../../DB/firebase-config"




const CardDetalle = ({ materiales }) => {
    const { titulo } = useParams()
    const [material, setMaterial] = useState({})    // const material = materiales.find(material => material.urlTitulo === titulo)

    const getMaterial = async () => {
        const materialRef = db.collection('materiales').doc(titulo);
        //mirarlo porque no va . https://firebase.google.com/docs/firestore/query-data/get-data?hl=es-419#node.js
        const doc = await materialRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
        }

    }
    useEffect(() => {
        getMaterial()

    }, [])


    return (

        <div>

            <Card>
                <CardBody>
                    <img src={material.url} alt="" />
                </CardBody>
                <CardFooter>
                    <Text> {material.titulo} </Text>

                </CardFooter>
            </Card>

        </div>
    )
}

export default CardDetalle


//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast.
//deberes crear una base de datos con verbos y conjugaciones, finales de verbos...
//deberes limpiar codigo