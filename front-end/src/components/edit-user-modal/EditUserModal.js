import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useForm } from './../../hooks/useForm';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_URL } from './../../constants/urls';
import { GlobalContext } from './../../context/GlobalContext';


export const EditUserModal = ({user, isEdit, setIsEdit}) => {

    const {token, sessionToken } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    let tokenFunction ;
    (token.length > 0 ? tokenFunction = token[0] : tokenFunction = sessionToken[0] )

    const handleShow = () =>{
        setShow(true);

    }

    const [form, onChange, clear] = useForm({
        username: "",
        email: "",
        phone: "",
        address: "",
      });

      const onSubmitEditUser = async (ev) => {

        const headers = {
          headers:{
            Authorization: tokenFunction
          }
        }
    
        ev.preventDefault();
        let body = {
          username: form.username,
          email: form.email,
          phone: form.phone,
          address: form.address,
    
        };


        if(!body.username  && !body.email && !body.phone && !body.address){
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Você não digitou nenhum campo, verifique e tente novamente Para Efetuar sua Requisição",
            showConfirmButton: false,
            timer: 3500
        })

        return

        }
        if(!body.username){
          body.username = user.username
        }
        if(!body.email){
          body.email = user.email
        }
        if(!body.phone){
          body.phone = user.phone
        }

        if(!body.address){
          body.address = user.address
        }

        try {

            const response = await axios.patch(`${BASE_URL}/${user.id}`, body, headers);
            if(response){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuário Editado Com Sucesso",
                showConfirmButton: false,
                timer: 1500
              })
              clear("")
              setShow(false)
              setIsEdit(true)
            }
      
          } catch (error) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Oops...",
              text: "Dados incorretos, Confira e tenta novamente Para Efetuar sua Requisição",
              showConfirmButton: false,
              timer: 1500
          })
      
          }
        }

    return (
        <>
        <td type="submit" className="btn btn-success" id="edit-button" onClick={()=>handleShow()}>
                Editar
            </td>

            <Modal show={show} onHide={handleClose}   backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Você pode editar apenas os campos não preenchidos</Form.Label>
          <Form id="editusermodal" onSubmit={onSubmitEditUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.username}
                name="username"
                value={form.username}
                onChange={onChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                autoFocus
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                name="email"
                value={form.email}
                onChange={onChange}
                autoFocus 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={form.address}
                onChange={onChange}
                placeholder={user.address}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.phone}
                name="phone"
                value={form.phone}
                onChange={onChange}                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="cpf"
                value={user.cpf}
                readOnly
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            FECHAR
          </Button>
          <button type="submit" className="btn btn-success" form="editusermodal">ENVIAR</button>
        </Modal.Footer>
      </Modal>        
        </>
    );
}
