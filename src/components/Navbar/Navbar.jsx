import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ materiales }) => {

    const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];


    return (
        <div>
            <Link to='/contactos'>contacto  </Link>
            <Link to='/materiales'>materiales </Link>
            {uniqueTypes.map((tipo) => (<Link to={`/materiales/${tipo}`}> {tipo} </Link>))}
            <Link to='/suscripcion'>suscripcion</Link>
            <Link to='/FormularioMateriales'> FormularioMateriales  </Link>

        </div>

    )


}

export default Navbar

//tareas: pensar en el boceto de la Natbar
