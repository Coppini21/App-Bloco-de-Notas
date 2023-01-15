import React, {useState} from "react";
import Notes from "../../../components/Notes";

import { useDispatch } from "react-redux";
import { salvarEdicao } from "../../../store";


import { Container } from "./styles"
import Visualizar from "../../../components/Notes/Visualizar";

export default function Armazenamento() {
    const [textEdition, setTextEdition] = useState();
    const dispatch = useDispatch();

    return (
        <Container>
            <div className="divAreaEdicao">
                <textarea id="areaEdicao" value={textEdition} onChange={(e) => setTextEdition(e.target.value)} disabled></textarea>
                <button type="button" id="btnSalvarEdicao" onClick={() => dispatch(salvarEdicao({ textEdition }))} >Salvar Edição</button>
            </div>
            <Notes />
            <Visualizar/>
        </Container>
    )
}