import styled from 'styled-components'


export const StyledFilterContainer = styled.div`
display: flex;
align-items:center;
align-content: center;
width: fit-content;

h4{
  margin-right: 5px;
  height: fit-content;
  align-self: flex-end
}
`; 

export const StyledSearch = styled.input`
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 2.5rem;
border: solid 2px var(--forest-green);
border-radius: 12px;
padding-left: 2px;



overflow: scroll;
scroll-behavior: smooth;
scrollbar-width: none;
::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
`
