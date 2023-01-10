import styled from "styled-components";

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
            let atualizarNota = null
            document.getElementById("areaEdicao").disabled = false;
            let areaEdition = document.getElementById("areaEdicao");
            
            const posicaoAtual = state.notes.findIndex((nota) => nota.id === action.payload.id);

            if (atualizarNota){
                console.log("aaaaaaaaa")
                state.notes[posicaoAtual].nota = action.payload.nota
            } 

            if (posicaoAtual !== -1) {
                // const pos = action.payload.id
                console.log(posicaoAtual)
                atualizarNota = state.notes[posicaoAtual].nota = action.payload.nota
                areaEdition.innerText = atualizarNota

            }
        },

        salvarEdicao(state, action){
            let key = action.payload;

            const posicaoAtual = state.notes.findIndex((nota) => nota.id === action.payload.idAtual);

            console.log(key);
         

            if(posicaoAtual !== -1){
                state.notes[posicaoAtual].nota = action.payload.textEdition;
                document.getElementById("areaEdicao").value = '';
                document.getElementById("areaEdicao").disabled = true;   
            }            
        },

        visualizar(state, action){
            let key = action.payload.id;

            const posicaoAtual = state.notes.findIndex((nota) => nota.id === action.payload.id);

            console.log(key);
            console.log(posicaoAtual);

            if(posicaoAtual !== -1){
                let descricao = state.notes[posicaoAtual].nota
                document.getElementById("VisualizacaoDescricao").innerText = descricao
                document.getElementById("visualStyled").style.display = "flex" 
                document.getElementById("overlay").style.display = "block"
                document.getElementById("overlayMenu").style.display = "block"
                document.getElementById("totalNota").style.zIndex = -1
                document.getElementById("btnSalvarEdicao").style.zIndex = -1
        
            }
        }
    }
  
})

export const { salvarNaLista, excluirNota, editarNota, salvarEdicao, visualizar } = createNotes.actions;

export default configureStore({
    reducer: createNotes.reducer
})