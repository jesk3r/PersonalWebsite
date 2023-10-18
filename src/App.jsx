import { Outlet } from 'react-router-dom';

import './App.css'

import Header from './componets/Header.jsx'
import Footer from './componets/Footer.jsx'

function App() {
  

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
