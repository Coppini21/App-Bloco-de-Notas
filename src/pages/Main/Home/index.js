import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { salvarNaLista } from '../../../store';

import { v4 as uuid } from 'uuid';

import { Container } from "./styles";

export default function Home(){
    const dispatch = useDispatch();
    const [text, setText] = useState();
    const unique_id = uuid();

   
  
    return(
        <Container>
            <div>
                <h1>Escreva sua nota: </h1>
                <textarea id="nota" onChange={(e) => setText(e.target.value)} placeholder="Digite algo..."></textarea>
                <button type="button" onClick={() => dispatch(salvarNaLista({text, unique_id}))}>Salvar</button>
            </div>
            
        </Container>
    )
}