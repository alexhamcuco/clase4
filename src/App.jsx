import { useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/contactos' element={<h1>contacto</h1>} />
          <Route path='/materiales' element={<h1>materiales</h1>} />

        </Routes>
        <Text fontSize='6xl' sx={{ color: 'red' }} > Spanish with alex

        </Text>

      </div >

    </>
  )
}

export default App
