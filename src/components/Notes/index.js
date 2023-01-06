import { useState } from "react";

import { DivNotasSalvas } from "./styles";

import { useSelector, useDispatch } from 'react-redux';
import { excluirNota, editarNota} from "../../store";

export default function Notes({ setIdAtual }) {
    const notes = useSelector(store => store.notes);
    const dispatch = useDispatch();

    console.log(notes)

    // useEffect(() => {
    //     async function pegandoId(){
    //         let idTeste = await document.getElementsByClassName("nota")

    //         return idTeste.getAttribute("id")
    //     }

    //     setIdAtual(pegandoId)
    // }, [setIdAtual])

    

    return (

        <DivNotasSalvas className="totalNota">


            {notes.length > 0 ? (
                notes.map((note) => (
                    <div className="nota"  key={note.id? setIdAtual(note.id) : null}>
                        <div className="descricaoNota"  id={note.id}>
                            <p>
                                {note.nota} 
                            </p>
                        </div>
                        <div className="divBotoes">
                            <button type="button">Visualizar</button>
                            <button type="button" onClick={() => dispatch(editarNota(note))}>Editar</button>
                            <button type="button" onClick={() => dispatch(excluirNota(note.id))}>Excluir</button>
                        </div>
                    </div>
                    
                ))

            ) : (
                ""
            )}

        </DivNotasSalvas>

    )
}