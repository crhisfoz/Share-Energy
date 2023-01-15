import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext';

export const useProtectedPage = () => {
  const navigate = useNavigate();

  const {token, sessionToken} = useContext(GlobalContext)

  useEffect(() => {
 
    if(token.length === 0 && sessionToken.length === 0){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Você precisa estar logado antes de ir para essa página",
        showConfirmButton: false,
        timer: 1500
    }) 
    navigate("/login") 
    }
  }, []);
};

