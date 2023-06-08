import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs } from 'firebase/firestore'
// import { Grid, GridItem } from '@chakra-ui/react'
// import { Bottom Card CardBody CardFooter} from '@chakra-ui/react'
import TarjetaComponente from './components/Card/TarjetaComponente.jsx'
import Datos from './components/DatosMateriales/Datos'
import TextoComponente from './components/Texto/TextoComponente'
import SeryEstarParte1 from './components/PaginasTarjetas/SeryEstarParte1'
import CardDetalle from './components/CardDetalle/CardDetalle'







function App() {

  //paginacion
  //javascript slice materialsnumber.slice(3, 6)
  const [materialsData, setMaterialsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(3)

  const lastPostIndex = currentPage * setPostsPerPage;
  const firstpostIndex = lastPostIndex - setPostsPerPage;
  const currentPosts = materialsData.slice(firstpostIndex, lastPostIndex)



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

  }

  useEffect(() => {
    getMateriales()



  }, [])
  console.log(materiales)


  return (
    <>

      <div>
        <Navbar />


        <Routes>
          <Route path='/contactos' element={<h1>contactooooo</h1>} />
          <Route path='/materiales' element={<Datos materiales={materiales} />} />
          <Route path='/podcast' element={<Datos materiales={materiales} />} />
          <Route path='/videos' element={<Datos materiales={materiales} />} />
          <Route path='/texto' element={<Datos materiales={materiales} />} />
          <Route path='/cards' element={<h1>putas cards</h1>} />
          <Route path='/suscripcion' element={<TextoComponente />} />
          <Route path='/materiales/podcast/:titulo' element={<CardDetalle materiales={materiales} />} />

        </Routes>

        <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex
        </Text>
        <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame </Button>

      </div >

    </>
  )
}


export default App

// si quieres exportar la informacion de manera globlal, manejar el estado de manera globaltienes 
// que utilizar context