import './App.css'
import {Route, Routes} from "react-router-dom"
import Context from "./context/Context"


import { Home } from './pages/Home'
function App() {
  const context = { }
  return (

    <Context.Provider value={context}>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Context.Provider>

  )
}

export default App
