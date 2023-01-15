import styled from 'styled-components'


export const StyledUser = styled.div`
  overflow: scroll;
  height: 100vh;
  width: 100vw;
  padding-left: 1rem;

`;

export const StyledContainerList = styled.div`
border:solid 2px var(--forest-green);
padding: 20px;
border-radius: 20px;
font-size: 0.8rem;

.btn{
  height: 1.2rem;
  align-items: center;
  font-size: 12px;
  padding: 0;
  margin-left:5px;
  color: var(--white);
  background-color: var(--forest-green)
} 
#delete-button{
  background-color: var(--red);

}
`
