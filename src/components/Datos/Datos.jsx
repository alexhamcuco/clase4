//este componente recibe todos los materiales, y muestra todos los materiales segun su tipo.
//es el componente con el grid, muestra todos los materiales, esta llamando al componente
//TarjetaComponente


import React from "react";

import TarjetaComponente from "../TarjetaComponente/TarjetaComponente";
import { Grid, GridItem } from "@chakra-ui/react";
import { useInstantLayoutTransition } from "framer-motion";
import { useParams } from "react-router-dom";

const Datos = ({ materiales }) => {

    const { tipo } = useParams() //este tipo está viculado al path itinerado?
    // console.log(tipo)
    // const { titulo } = useParams()   //estos son pruebas para intentar comprender
    // console.log(titulo)                  

    let materialesFiltrados = materiales
    if (tipo) {
        materialesFiltrados = materiales.filter((material) => material.tipo === tipo)
    }
    return (
        < Grid templateColumns='repeat(3, 1fr)' gap={6}  >
            {
                materialesFiltrados.map((material) => <TarjetaComponente material={material} key={material.id} />)
            }
        </Grid>
    )

}

export default Datos


// hay dos maneras de mostrar las tarjetas al usuario
// una es con paginacion
// y otra es lazyscrolling