import styled from "styled-components";

export const VisualStyled = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    width: 100%;
    height: 110px;

    #divTotalNote{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0px;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    #divTotalClose{
        max-width: 800px;
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
        width: 90%;
        height: 500px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        overflow: auto;
        z-index: 999;
    }
`;