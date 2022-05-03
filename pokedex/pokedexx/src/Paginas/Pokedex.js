import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { goBack } from "../Routes/Coordinator";
import Card from "./Card";

const Cabecalho = styled.div`
    display: flex;
    background-color: lightblue;
    align-items: center;
    justify-content: space-between;


    img{
        width: 12em;
        margin-left: 1em;
    }

    button{
        margin-right: 1em;
        color: blue;
        background-color: yellow;
        border: none;
        width: 10em;
        height: 3em;
        border-radius: 5%;
        font-weight: bold;
        :hover{
            background-color: blue;
            color: yellow;
        }

    }

`
const Cards = styled.div`
    height: 500px;
`

const Rodape = styled.div`
    height: 50px;
    background-color: lightblue;
`



function Pokedex (){

    const navigate = useNavigate()
    return(
        <>
         <Cabecalho>
            <img src="https://1000marken.net/wp-content/uploads/2021/01/logo-Pokemon.png"/>
            <h1>Minha Pokedex</h1>
            <button
            onClick={()=>goBack(navigate)}
            >Lista de Pokemons</button>

        </Cabecalho>
        <Cards>
            <Card/>
        </Cards>
        <Rodape>

        </Rodape>

        </>
    
    )
}

export default Pokedex