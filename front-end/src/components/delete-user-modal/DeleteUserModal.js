import React, { useContext, useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { GlobalContext } from '../../context/GlobalContext';
import Modal from "react-bootstrap/Modal";


export const DeleteUserModal = ({ user, isDelete, setIsDelete }) => {

  const { token, sessionToken } = useContext(GlobalContext);

  let tokenFunction;
  (token.length > 0 ? tokenFunction = token[0] : tokenFunction = sessionToken[0])

      const onSubmitDeleteUser = async (ev) => {
        ev.preventDefault();
        const headers = {
          headers:{
            Authorization: tokenFunction
          }
        }

        try {

            const response = await axios.delete(`${BASE_URL}/${user.id}`, headers);
            if(response){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuário Deletado Com Sucesso",
                showConfirmButton: false,
                timer: 1500
              })
            setIsDelete(true)
            }
      
          } catch (error) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Oops...",
              text: "Sua Solicitação não foi completada, Confira o Id do usuário e tente novamente",
              showConfirmButton: false,
              timer: 1500
          })
      
          }
        }

  return (
    <>
      {/*     <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        style={{ backgroundColor: "red" }}>
        Deletar
      </button>

      {/*    <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel"> Deseja Realmente Deletar o Usuário ?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <h2 style={{color: "black"}}>{user.name} </h2>  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" style={{ backgroundColor: "red" }}
              onClick={onSubmitDeleteUser}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
