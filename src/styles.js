import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Conteiner = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;

    ul{
        padding: 0%;
        margin-top: 50px;
        
    }
`
export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212,0.4);
    border-radius:8px ;
    height: 30px;
    width: 250px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
`
export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    border: none;
    height: 35px;
    width: 110px;
    margin-left: 30PX;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }

`
export const ListIten = styled.div`
    background: ${props => props.isFinished ? `#E8ff8b` : `#E4E4E4`};
    box-shadow: rgba(0, 0, 0, 0.2) 1px 4px 10px;
    border-radius: 5px;
    height: 45px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 10px;
    

    li{
        list-style: none;
    }

`
export const H3 = styled.h3`
    display: flex;
    justify-content: center;
    color: red;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`
export const Check = styled(FcCheckmark)`
    cursor: pointer;
`


