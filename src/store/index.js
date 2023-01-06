

const { createSlice, configureStore } = require("@reduxjs/toolkit");

const createNotes = createSlice({
    name: 'register',
    initialState: {
        notes: [],
    },

    reducers: {
        salvarNaLista(state, action) {
            if (state.text !== '') {
                state.notes.push({ id: action.payload.unique_id, nota: action.payload.text, });
            }
            document.getElementById("nota").value = '';
        },

        excluirNota(state, action) {
            const posicaoAtual = state.notes.findIndex((nota) => nota.id === action.payload);
            console.log(posicaoAtual);

            if (posicaoAtual !== -1) {
                state.notes.splice(posicaoAtual, 1);

            } else {
                console.log(posicaoAtual)
                alert("Error: Nota não encontra.");
            }
        },

        editarNota(state, action) {
            document.getElementById("areaEdicao").disabled = false;
            let areaEdition = document.getElementById("areaEdicao");
            const atualizarNota = state.notes[posicaoAtual].nota = action.payload.nota

            const posicaoAtual = state.notes.findIndex((nota) => nota.id === action.payload.id);

            if (posicaoAtual !== -1) {
                const pos = action.payload.id
                console.log(posicaoAtual)
                const atualizarNota = state.notes[posicaoAtual].nota = action.payload.nota
                areaEdition.innerText = atualizarNota

                salvarEdicao(pos)
            }
        },

        salvarEdicao(state, action){
            let key = action.payload.idAtual;

            const posicaoAtual = state.notes.findIndex((nota) => nota.id === key);

            console.log(key);
            console.log("fooooooi");
            console.log(document.getElementById("areaEdicao").value);
            console.log(state.notes);

            if(posicaoAtual !== -1){
                state.notes[posicaoAtual].nota = action.payload.textEdition;
                document.getElementById("areaEdicao").value = '';
                document.getElementById("areaEdicao").disabled = true;   
            }
           
                      
        }
    }
  
})

export const { salvarNaLista, excluirNota, editarNota, salvarEdicao } = createNotes.actions;

export default configureStore({
    reducer: createNotes.reducer
})