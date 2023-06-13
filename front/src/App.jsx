import './App.css'
import {Route, Routes} from "react-router-dom"
import Context from "./context/Context"
import Grid from '@mui/material/Grid'
import { useState } from 'react'


import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  const [token, setToken] = useState('')
  const context = {token}
  return (

    <Context.Provider value={context}>
      <Grid container>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Grid>
    </Context.Provider>

  )
}

export default App
