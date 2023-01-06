import styled from "styled-components";

export const DivNotasSalvas = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .nota{
        width: 500px;
        height: 100px;
        display: flex;
        background: rgb(229, 0, 3 ) ;
        border-radius: 10px;
    }

    .descricaoNota{
        width: 380px;
        height: 100px;
        padding: 10px;

        p{
            color: black;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
       
       
    }

    .divBotoes{
        width: 120px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        padding: 5px;

        button{
            background-color:  rgb(190, 99, 45 );
            border: none;
            padding: 2px;
            border-radius: 5px;
            transition: all 0.3s;

            &:hover{
                background-color:  rgb(250, 99, 45 );
            }
        }
    }
`;
