import styled from "styled-components";

export const Overlay = styled.div`
    display: none;
    width: 100%;
    height: 130px;
    position: absolute;
    background-color: rgba(180, 169, 171, 0.6);
    z-index: 1;
`;

export const Container = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 130px;
    background: rgb(190, 99, 45 ) ;
    z-index: 2;

  
    .divMenuLadoEsquerdo{
        display: ${({id}) => id === "notas" ? 'none' : 'flex'};
        flex-direction: column;
        gap: 10px;
        letter-spacing: 1.5px;
        color: black;
        
        h1{
            
            font-family: 'Anton', sans-serif;
        }
    }

    .arrow-back{
        display: ${({id}) => id === 'notas' ? 'flex' : 'none'};

        .button-arrow-back{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            background: transparent;
            border: none;
        }
    }


`;

export const BotaoStyled = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: none;
`;