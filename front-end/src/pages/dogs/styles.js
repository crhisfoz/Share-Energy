import styled from 'styled-components'


export const StyledDogs = styled.div`
  overflow: scroll;
  height: 100vh;
  width: 100vw;
  `

  export const StyledForm = styled.form`
    padding: 10px;
    margin: auto;
    width: 60%;
    display: flex;
    border: solid 2px var(--forest-green);
    border-radius: 20px;
    caret-color: var(--forest-green);

    div, label ,input{
      height: 2rem;
    }
  `

export const StyledContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      margin-top:1rem;
      height: 60%;
      width: 60%
    }
  `


