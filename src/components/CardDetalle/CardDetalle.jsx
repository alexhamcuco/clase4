//este el es componente de vista individual

import React, { useState, useEffect } from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { collection, limit, query, where, getDocs } from "firebase/firestore";
import db from "../../../DB/firebase-config"
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';




const CardDetalle = ({ materiales }) => {
    const { titulo } = useParams()
    const [material, setMaterial] = useState({})    // const material = materiales.find(material => material.urlTitulo === titulo)
    const [loading, setLoading] = useState(true);

    const getMaterial = async () => {
        const q = query(
            collection(db, "materiales"),
            where("urlTitulo", "==", titulo),
            limit(1)
        );
        getDocs(q).then((querySnapshot) => {
            if (querySnapshot.empty) {
                console.log("No hay resultados");
            }


            setMaterial(querySnapshot.docs.map((doc) => doc.data())[0]);
            setLoading(false)

        });
    };
    useEffect(() => {
        getMaterial()

    }, [])
    if (loading) {
        return <LoadingIndicator />

    }

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


//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast.
//deberes crear una base de datos con verbos y conjugaciones, finales de verbos...
//deberes limpiar codigo