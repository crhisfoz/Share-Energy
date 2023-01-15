import styled from 'styled-components'
import "./colors.css";

export const InitialContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    justify-content: center;
    align-items: center;

    background-color: #000;
    font-size: 3em;

    h3{
        color: var(--white);
        font-weight: normal;
        
    }
figure{
    height:60vh;
    width: 60vw;
    border-radius: 20px;
    background-color: var(--forest-green);
    display: flex

}

figure img{
    width: 60%;
    height: 50%;
    margin: auto auto
}
`;

