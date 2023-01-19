import React, { useContext, useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { GlobalContext } from '../../context/GlobalContext';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export const DeleteUserModal = ({ user, setDelete }) => {

  const { token, sessionToken } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  let tokenFunction;
  (token.length > 0 ? tokenFunction = token[0] : tokenFunction = sessionToken[0])

  const handleShow = () => {
    setShow(true);

  }

  const onDeleteUser = async (ev) => {


    ev.preventDefault();

    const headers = {
      headers: {
        Authorization: tokenFunction
      }
    }

    try {

      const response = await axios.delete(`${BASE_URL}/${user.id}`, headers);
      if (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuário Deletado Com Sucesso",
          showConfirmButton: false,
          timer: 1500
        })
        setShow(false)
        setDelete(true)
      }

    } catch (error) {
      console.log(error)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "Requisição não completada, verifique o id enviado, Confira e tenta novamente",
        showConfirmButton: false,
        timer: 1500
      })

    }
  }

  return (
    <>
      <td type="submit" className="btn btn-danger" id="edit-button" onClick={() => handleShow()}
        style={{ backgroundColor: "red" }}
      >
        Deletar
      </td>

      <Modal show={show} onHide={handleClose} backdrop="static" style={{ backgroundColor: "rgba(123, 123, 123, 0.5)" }}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Deseja Realmente Deletar o usuário ?? </Form.Label>
          <Form id="editusermodal" onSubmit={onDeleteUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={user.username}
                name="username"
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                disabled
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCELAR
          </Button>
          <button type="submit" className="btn btn-danger" form="editusermodal">CONFIRMAR</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
