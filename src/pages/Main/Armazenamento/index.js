import React, {useEffect, useState} from "react";
import Notes from "../../../components/Notes";

import { useDispatch } from "react-redux";
import { salvarEdicao } from "../../../store";


import { Container } from "./styles"

export default function Armazenamento() {
    const [idAtual, setIdAtual] = useState(null);
    const [textEdition, setTextEdition] = useState();
    const dispatch = useDispatch();

    // useEffect(() => {
    //         setIdAtual()
    // }, [textEdition])

    return (
        <Container>
            <div className="divAreaEdicao">
                <textarea id="areaEdicao" value={textEdition} onChange={(e) => setTextEdition(e.target.value)} disabled></textarea>
                <button type="button" id="btnSalvarEdicao" onClick={() => dispatch(salvarEdicao({ textEdition, idAtual }))} >Salvar Edição</button>
            </div>
            <Notes setIdAtual={setIdAtual} />
        </Container>
    )
}