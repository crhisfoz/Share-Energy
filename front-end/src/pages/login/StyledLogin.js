import styled from 'styled-components';
import "../../styles/colors.css";

export const StyledMain = styled.main`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;

`

export const StyledLogin = styled.div`
display: flex;
width: 100vw;
height: 100%;
flex-direction: column;
color: var(--forest-green);
align-items: center;
margin: auto;
margin-top: 500px;
`

export const ButtonLogin = styled.div`
display: flex;
justify-content:center;


button{
    font-weight: bold;
    background-color: var(--forest-green);
    :hover{
         background-color: var(--forest-green);

    }
    
}

`

export const StyledForm = styled.form`
 border: solid 2px green;
 border-radius: 20px;
 width: 60%;
 padding: 10px;
 overflow: hidden;

 h1{
    align-self: center;
    width: fit-content;
    margin: 2rem auto;
    font-weight: 700
 }
 #form-check-input{
    background-color: var(--forest-green);
    border: none
 }
 
`