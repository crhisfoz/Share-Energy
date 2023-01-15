import React from "react";
import { StyledList } from "./style"

export const UserList = (props) => {

    const { username, name, email, address, phone, cpf } = props

    console.log(props)
    return (
        <StyledList className="row">
            <table class="table">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>{username}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>{phone}</td>
                        <td>{cpf}</td>
                    </tr>
                </tbody>
            </table>
        </StyledList>
    )
}