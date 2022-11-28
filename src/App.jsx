import {React, useState} from 'react'
import Card from './components/Card';
import ApiContext from './context/ApiContext'

import './style.css'


function App() {
const [ api, setApi] = useState([]);
const estadoGlobal = { api , setApi}

  return (
    <ApiContext.Provider value={ estadoGlobal }>
    
    
    <Card/>
    
        
    </ApiContext.Provider>
  )
}

export default App
