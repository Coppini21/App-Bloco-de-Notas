import styled from "styled-components";

export const DivNotasSalvas = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 1;
  
    .nota{
        max-width: 90%;
        width: 500px;
        height: 100px;
        display: flex;
        background: rgb(229, 0, 3 ) ;
        border-radius: 10px;
    }

    .descricaoNota{
        width: 380px;
        height: 100px;
        padding: 10px 30px 10px 10px;

        p{
            color: black;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
       
       @media(max-width: 540px) {
        width: 330px;
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
