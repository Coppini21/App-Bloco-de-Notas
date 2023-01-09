import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  

    div{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        h1{
            color: rgb(190, 99, 45 ) ;   
        }

        textarea{
            max-width: 90%;
            width: 700px;
            margin-top: 20px;
            font-size: 20px;
            padding: 20px;
            height: 400px;
            border-radius: 10px;
        }

        button{
            margin-top: 20px;
            height: 50px;
            width: 100px;
            background-color:  rgb(190, 99, 45 );
            border-radius: 5px;
            font-weight: bold;
            transition: all 0.3s;

            &:hover{
                transform: scale(1.1);
            }
        }
    }

   
`;