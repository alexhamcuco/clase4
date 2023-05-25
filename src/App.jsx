import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs } from 'firebase/firestore'
// import { Grid, GridItem } from '@chakra-ui/react'
// import { Bottom Card CardBody CardFooter} from '@chakra-ui/react'
import TarjetaComponente from './components/Card/TarjetaComponente.jsx'

function App() {
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
          <Route path='/materiales' element={<h1>materiales</h1>} />
          <Route path='/cards' element={<TarjetaComponente />} />

        </Routes>

        <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex
        </Text>
        <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame </Button>

      </div >

    </>
  )
}

export default App
