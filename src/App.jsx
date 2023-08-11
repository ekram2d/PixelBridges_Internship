import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import HeaderSection from './Pages/HeaderSection/HeaderSection'
import MainSection from './Pages/MainSection/MainSection'

import Footer from './Pages/Footer/Footer'
import Body from './Pages/BodySection/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeaderSection></HeaderSection>

      {/* <MainSection></MainSection> */}
      <Body></Body>
      <Footer></Footer>





    </>
  )
}

export default App
