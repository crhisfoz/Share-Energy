/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { StyledUser, StyledContainerList } from "./styles";
import { GlobalContext } from './../../context/GlobalContext';
import { Spinner } from './../../components/spinner/Spinner';
import { useGetData } from './../../hooks/useGetData';
import { useState } from 'react';
import * as ReactBootstrap from "react-bootstrap"
import { useProtectedPage } from './../../hooks/useProtectedpage';
import { EditUserModal } from "../../components/edit-user-modal/EditUserModal";
import axios from "axios";
import { BASE_URL } from "./../../constants/urls";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { DeleteUserModal } from "../../components/delete-user-modal/DeleteUserModal";

export const UsersPage = () => {

    useProtectedPage()

    const { loading, setLoading, error, setError, token, sessionToken } = useContext(GlobalContext);
    const [users, setUsers] = useState([])
    const [isDelete, setDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    let tokenFunction;
    (token.length > 0 ? tokenFunction = token[0] : tokenFunction = sessionToken[0] )

    useEffect(() => {


        (async () => {
            setLoading(true)

            try {
                if (isDelete)
                    setDelete(false);
                if (isEdit)
                    setDelete(false);
                const dataUser = await useGetData();
                setUsers(dataUser)

            } catch {
                setError(error)
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [isDelete, isEdit])



    async function deleteUser(user,) {

        const headers = {
            headers: {
                Authorization: tokenFunction
            }
        }
        try {
            console.log(tokenFunction)
            const response = await axios.delete(`${BASE_URL}/${user.id}`, headers);
            console.log(response)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuário deletado Com Sucesso",
                showConfirmButton: false,
                timer: 1500
            })
            setDelete(true)
        } catch (error) {
            console.log(error)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Oops...",
                text: "Requisição mal sucedida, confira os dados digitados e tente novamente",
                showConfirmButton: false,
                timer: 3000
            })
        }
    }
    return (<>
        <StyledUser>
            <Header />
            <StyledContainerList className="container-fluid">
                {loading && <Spinner />}
                {!loading && error && <h2>Ocorreu Um Erro na Requisição</h2>}
                <NavLink to="/signup" className="btn btn-success">CADASTRAR NOVO USUÁRIO</NavLink>
                <ReactBootstrap.Table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row"></th>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.cpf}</td>
                                    <EditUserModal
                                        user={user}
                                        setIsEdit={setIsEdit}
                                        isEdit={isEdit}
                                    />
                                    <DeleteUserModal
                                     user={user}
                                     setDelete={setDelete}
                                     isDelete={isDelete}
                                    />
                                </tr>
                            ))

                        }

                    </tbody>
                </ReactBootstrap.Table>
            </StyledContainerList>
        </StyledUser>
    </>
    )
}