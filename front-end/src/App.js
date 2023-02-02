/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToHome } from "./routes/Coordinator"
import sharenergy from "./assets/images/logo-share.jpg"
import { InitialContainer } from "./styles/initialContainerStyled";
import { GlobalContext } from "./context/GlobalContext"


const App = () => {


  const navigate = useNavigate();

  const { token, isValid } = useContext(GlobalContext);


  useEffect(() => {
    setTimeout(() => {
      (token.length === 0 || !isValid) ? goToLogin(navigate) : goToHome(navigate)

    }, 3000)
  }, [])


  return (
    <InitialContainer>
      <figure>
        <img src={sharenergy} alt="imagem de logo com fundo branco, escrito share-energy com cores verde claro e azul claro" />
      </figure>
    </InitialContainer>
  );
}

export default App;
