import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from '../Routes/Coordinator'


function Descricao (){
    
    const navigate = useNavigate()

    return(
        <>
        Descricao
        <button
        onClick={()=>goBack(navigate)}>Voltar</button>
        </>
    )
}

export default Descricao