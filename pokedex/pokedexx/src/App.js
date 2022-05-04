import React, { useEffect, useState } from 'react'
import Telas from './Routes/Route';
import {ContextoPokemon} from './Context/Context'
import axios from 'axios';




function App() {

  const [listaPoke,setListaPoke] = useState([])


  useEffect(()=>{

     axios.get("https://pokeapi.co/api/v2/pokemon").then((res)=>{
       setListaPoke(res.data.results)
     }).catch((err)=>{
       console.log(err)
     })
    
  },[])
  
  

  
  return (
   <ContextoPokemon.Provider value={listaPoke}>
    <Telas/>
   </ContextoPokemon.Provider>
  )


}

export default App
