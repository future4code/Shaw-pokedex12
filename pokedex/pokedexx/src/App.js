import React, { useEffect, useState } from 'react'
import Telas from './Routes/Route';
import {ContextoPokemon} from './Context/Context'
import axios from 'axios';




function App() {

  const [listaPoke,setListaPoke] = useState([])
  const [dadosPokedex, setDadosPokedex]=useState([])
  const [descreverPoke, setDescreverPoke] = useState("")

  useEffect(()=>{

     axios.get("https://pokeapi.co/api/v2/pokemon").then((res)=>{
       setListaPoke(res.data.results)
     }).catch((err)=>{
       console.log(err)
     })
    
  },[])
  console.log(dadosPokedex);
  
  const recuperaDados =(dados)=>{
    setDadosPokedex(dados)
  }
  
  return (
   <ContextoPokemon.Provider value= {[listaPoke,recuperaDados,dadosPokedex,setDescreverPoke,descreverPoke]}>
    <Telas/>
   </ContextoPokemon.Provider>
  )


}

export default App
