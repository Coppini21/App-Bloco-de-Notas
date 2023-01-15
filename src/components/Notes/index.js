
import { DivNotasSalvas } from "./styles";

import { useSelector, useDispatch } from 'react-redux';
import { excluirNota, editarNota, visualizar } from "../../store";

export default function Notes() {
    const notes = useSelector(store => store.notes);
    const dispatch = useDispatch();

    console.log(notes)

    return (

        <DivNotasSalvas className="totalNota" id="totalNota">


            {notes.length > 0 ? (
                notes.map((note) => (
                    <div className="nota"  key={note.id}>
                      
                        <div className="descricaoNota">
                            <p>
                                {note.nota} 
                            </p>
                        </div>
                        <div className="divBotoes">
                            <button type="button" onClick={() => dispatch(visualizar(note))}>Visualizar</button>
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