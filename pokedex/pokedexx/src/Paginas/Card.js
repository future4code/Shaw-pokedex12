import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { goToPage } from '../Routes/Coordinator';
import axios from 'axios';

const Cartao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    width: 11em;
    margin: 0.5em;
    background-color: lightblue;
    border-color: grey;
    border-radius: 5%;
    border-width: 1px;

    img{
        width: 10em;
    }
    button{
        
        width: 6em;
        height: 2em;
        margin: 0.1em;
        background-color:lightgrey;
        color: blue;
        border: solid;
        font-weight: bold;
        border-radius: 10%;
        border-color: blue;
        border-width: 1px;

    }
`


function Card(props) {

    const navigate = useNavigate()
    const [imagem,SetImagem] = useState("")

    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            SetImagem(res.data.sprites.front_default)
        }).catch((err)=>{
            console.log("erro no card")
        })
    },[])

  return (
   <Cartao>
       <h3>{props.nome}</h3>
       <img src={imagem}/>
       <div>
       <button>Adicionar</button>
       <button
       onClick={()=>goToPage(navigate,'descPoke')}
       >Detalhes</button>
       </div>
    
   </Cartao>
  );
}

export default Card;