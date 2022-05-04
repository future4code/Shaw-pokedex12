import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { goToPage } from "../Routes/Coordinator";
import { ContextoPokemon } from "../Context/Context";
import Card from "./Card";
import axios from "axios";



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
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: blue;
`

const Rodape = styled.div`
    height: 50px;
    background-color: lightblue;
`



function HomePage (){

    const navigate = useNavigate()

    const listaDePokemon = useContext(ContextoPokemon)

    

    const mostrarCards = listaDePokemon.map((elemento)=>{
        return <Card nome={elemento.name} url={elemento.url}/>
    })
   
    
      

    return(
        <>


        <Cabecalho>
            <img src="https://1000marken.net/wp-content/uploads/2021/01/logo-Pokemon.png"/>
            <h1>Lista de Pokemons</h1>
            <button
            onClick={()=>goToPage(navigate,'pokedex')}
            >Minha Pokedex</button>

        </Cabecalho>
        <Cards>
            {mostrarCards}
        </Cards>
        <Rodape>

        </Rodape>

        </>
    )
}

export default HomePage