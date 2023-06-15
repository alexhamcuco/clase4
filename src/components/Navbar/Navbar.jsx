import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ materiales }) => {


    return (
        <div>
            <Link to='/contactos'>contacto  </Link>
            <Link to='/materiales/'>materiales </Link>
            {materiales.map((material) => (<Link to={`/materiales/${material.tipo}`}> {material.tipo} </Link>))}
            <Link to='/suscripcion'>suscripcion</Link>

        </div>

    )


}

export default Navbar

//tareas: pensar en el boceto de la Natbar
