import styled from "styled-components";

export const Overlay = styled.div`
    display: none;
    width: 100%;
    height: calc(100% - 130px);
    position: absolute;
    background-color: rgba(180, 169, 171, 0.6);
    z-index: -1;
`;

export const VisualStyled = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    #divTotalNote{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0px;
        position: fixed;
        width: 100%;
        height: 100%;

        @media(max-width: 500px) {
            margin-top: -300px;
            position: absolute;
        }
    }

    #divTotalClose{
        max-width: 800px;
        min-width: 400px;
        height: 50px;
        width: 90%;
        display: flex;
        justify-content: right;

        & svg:hover{
            cursor: pointer;
            color: rgb(190, 99, 45 );
        }  
    }

    #VisualizacaoDescricao{
        max-width: 800px;
        min-width: 400px;
        width: 90%;
        height: 500px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        overflow: auto;
        z-index: 999;
    }
`;