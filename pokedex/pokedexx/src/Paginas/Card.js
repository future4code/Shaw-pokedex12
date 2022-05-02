import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { goToPage } from '../Routes/Coordinator';

const Cartao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    width: 12em;

    img{
        width: 10em;
    }
`


function Card() {

    const navigate = useNavigate()

  return (
   <Cartao>
       <h3>Pikachu</h3>
       <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-Pok%C3%A9mon-PNG.png"/>
       <div>
       <button>Remover</button>
       <button
       onClick={()=>goToPage(navigate,'descPoke')}
       >Detalhes</button>
       </div>
    
   </Cartao>
  );
}

export default Card;