import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;

    .divAreaEdicao{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        textarea{
            width: 700px;
            height: 200px;
            border-radius: 10px;
            padding: 20px;
            font-size: 20px;
        }

        button{
            border: none;
            margin-top: 20px;
            height: 50px;
            width: 150px;
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


