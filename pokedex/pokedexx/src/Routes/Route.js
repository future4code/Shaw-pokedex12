import React from "react"
import HomePage from "../Paginas/HomePage"
import Descricao from "../Paginas/Descricao"
import Pokedex from "../Paginas/Pokedex"
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function Telas (props){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage funcaoRecuperaDados={props.funcaoRecuperaDados}/>}/>
                <Route path='pokedex' element={<Pokedex/>}/>
                <Route path='descPoke' element={<Descricao/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Telas