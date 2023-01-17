import React, { useContext, useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { GlobalContext } from '../../context/GlobalContext';
import Modal from "react-bootstrap/Modal";


export const DeleteUserModal = ({ user, isDelete, setIsDelete }) => {

  const { token, sessionToken } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let tokenFunction;
  (token.length > 0 ? tokenFunction = token[0] : tokenFunction = sessionToken[0])

  const handleShow = (e) => {
    setShow(true);
  }


  return (
    <>

      <td type="button" className= "btn" style={{ backgroundColor: "red"}} onClick={() => handleShow()}>
        Deletar
      </td>

      <Modal show={show} onHide={handleClose} backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Deletar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body className= "modal-body justify-content-space-between">
        <p > `Deseja Realmente deletar <strong style={{color: "black"}}>{user.name}</strong >??` </p>
        <div className="d-flex justify-content-evenly ">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger">Deletar</button>
            </div>
        </Modal.Body>
      </Modal>

    </>
  );
}
