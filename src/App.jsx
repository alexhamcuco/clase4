import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs } from 'firebase/firestore'
import Datos from './components/Datos/Datos'
import TextoComponente from './components/Texto/TextoComponente'
import FormularioMateriales from './components/FormularioMateriales/FormularioMateriales'
import CardDetalle from './components/CardDetalle/CardDetalle'
import ImagenPortadaComponente from './components/ImagenPortadaComponente/ImagenPortadaComponente'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials'
import Condiciones from './components/Condiciones/Condiciones'
import Privacidad from './components/Privacidad/Privacidad'
import Contacto from './components/Contacto/Contacto'
import Cookies from './components/Cookies/Cookies'//vite es el nuevo webpack, es un compilador de procesos. 
import About from './components/About/About'
import Video from './components/Video/Video'
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator'
import PriceTable from './components/PriceTable/PriceTable'
import ReservaFacil from './components/ReservaFacil/ReservaFacil'
import ComponenteSeparador from './components/Separador/ComponenteSeparador'
import RetrasosAviones from './components/RetrasosAvionesA1/RetrasosAviones'
//Vite preagrupa las dependencias de React

function App() {

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Función para manejar el evento de carga completa de la página
  //   const handleLoad = () => {
  //     setLoading(false); // Actualiza el estado para indicar que la carga ha finalizado
  //   };

  //   // Agrega un event listener para el evento de carga completa de la ventana
  //   window.addEventListener('load', handleLoad);

  //   // Limpia el event listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);


  //cargar la imagen de la portada del componente ImagenPortadaComponente
  const imagenPortada = '../assets/imagenes/cards/avionRetraso.jpg'
  //segunda imagen de portada pero en disco duro local
  // const imagenPortada = './src/assets/imagenes/saliendoPortatil.png';
  //solucion: puedes cargar la imagen como promp dentro del componente
  //aun así necesito cargar la constante portada aqui...o eso parece


  //firebase materiales (objeto con los datos de las tarjetas)
  const [materiales, setMateriales] = useState([])
  const materialesRef = collection(db, "materiales")

  const getMateriales = async () => {
    const materialesLista = await getDocs(materialesRef)
    const materiales = materialesLista.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    // console.log(materiales)
    setMateriales(materiales)
    setLoading(false)
  }

  useEffect(() => {
    getMateriales()

  }, []);
  console.log(materiales)

  return (
    <>
      <div>

        {loading ? (
          <LoadingIndicator /> // Muestra el indicador de carga mientras loading sea true
        ) : (
          <>

            <Navbar materiales={materiales} />


            <Routes>

              <Route path="/home" element={
                <>
                  <ImagenPortadaComponente imagenPortada={imagenPortada} />
                  <ComponenteSeparador />
                  <Testimonials />
                  <ComponenteSeparador />

                  <PriceTable />
                  <ComponenteSeparador />


                  <ReservaFacil />
                  <ComponenteSeparador />

                  <Video />
                  <ComponenteSeparador />

                </>
              } />
              <Route path='/materiales' element={<Datos materiales={materiales} />} />
              <Route path='/materiales/:tipo' element={<Datos materiales={materiales} />} />
              <Route path='/materiales/:tipo/:titulo' element={<CardDetalle materiales={materiales} />} />
              <Route path='/suscripcion' element={<TextoComponente />} />
              <Route path='/FormularioMateriales' element={<FormularioMateriales />} />


              <Route path='/terminos-y-condiciones' element={<Condiciones />} />
              <Route path='/politica-de-privacidad' element={<Privacidad />} />
              <Route path='/contacto' element={< Contacto />} />
              <Route path='/cookies' element={< Cookies />} />
              <Route path='/alejandro-rodriguez' element={< About />} />

              <Route path='materiales/videos/retrasos-aviones' element={< RetrasosAviones />} />
              <Route path='materiales/videos/retrasos-aviones' element={< RetrasosAviones />} />
              <Route path='materiales/videos/un-dia-en-la-playa-A1' element={< RetrasosAviones />} />
              <Route path='materiales/Ejercicios/verde-que-te-quiero' element={< RetrasosAviones />} />
              <Route path='materiales/videos/retrasos-aviones' element={< RetrasosAviones />} />

              <Route path='*' element={<Navigate to='/home' />} />






            </Routes>

            <Footer />

          </> //parte final d para el indicador de loading, la linea siguiente tambien
        )}

      </div >

    </>
  )
}

export default App

// si quieres exportar la informacion de manera globlal, manejar el estado de manera globaltienes 
// que utilizar context
//
