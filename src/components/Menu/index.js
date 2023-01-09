import { NavLink, useParams } from "react-router-dom";

import { useSelector } from 'react-redux';

import { Container, BotaoStyled } from "./styles";
import { HiDocumentText, HiArrowLeft } from 'react-icons/hi';

export default function Menu(){
    const notes = useSelector(store => store.notes)
    const { id } = useParams()

    return(
        <Container id={id}>
            <div className="divMenuLadoEsquerdo">
                <h1>Notas</h1>
                <h3>{notes.length} Notas</h3>
            </div>
            <div className="arrow-back">
                <NavLink to='/'>
                    <button className="button-arrow-back" type="button">
                        <HiArrowLeft size={30}/>
                        <h3>Voltar</h3>         
                    </button>
                </NavLink>    
            </div>
            <div>
                <NavLink to='armazenamento/notas'>
                    <BotaoStyled>
                        <HiDocumentText size={30} />
                        <h3>Notas Armazenadas</h3>
                    </BotaoStyled>
                </NavLink>
                
                
            </div>
           
        </Container>
    )
}