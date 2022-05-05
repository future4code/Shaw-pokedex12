import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from '../Routes/Coordinator'
import styled from "styled-components";
import { ContextoPokemon } from "../Context/Context";

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

function Descricao (){
    
    const navigate = useNavigate()

    const listaDePokemon = useContext(ContextoPokemon)

    const urlDescricao = listaDePokemon[4]

    console.log(urlDescricao)

    //A url para buscar os dados do pokemon para a pagina de detalhes está na variavel urlDescricao

    return(
        <>
        
        <Cabecalho>
            <img src="https://1000marken.net/wp-content/uploads/2021/01/logo-Pokemon.png"/>
            <h1>Descrição</h1>
            <button
            onClick={()=>goBack(navigate)}
            >Voltar</button>

        </Cabecalho>
        <Cards>

        </Cards>
        <Rodape>

        </Rodape>
        </>
    )
}

export default Descricao