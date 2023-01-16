/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from "react"
import { StyledLogin, ButtonLogin, StyledForm, StyledMain } from "./StyledLogin";
import { useForm } from "../../hooks/useForm";
import axios from "axios"
import { BASE_URL } from "./../../constants/urls";
import Swal from "sweetalert2";
import { goToHome, goToLogin } from "./../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { switchErrorLogin } from "../../utils/switchErrorLogin";
import { useContext } from "react";
import { GlobalContext } from "./../../context/GlobalContext";
import { useState } from 'react';
import { HeaderLogin } from "../../components/header-login/HeaderLogin";
import { useSessionStorage } from './../../hooks/useSessionStorage';

export const Login = () => {
    const navigate = useNavigate()

    const {token, setToken, isValid, setIsValid,sessionToken, setSessionToken} = useContext(GlobalContext);
    const [form, onChange, clear] = useForm({ username: "", password: "" });
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        (token === null || !isValid) ? goToLogin(navigate): goToHome(navigate)
    },[])

    const onCLickCheckbox = async (ev) => {
        setChecked(await ev.target.checked)
    }

    const onSubmitFormLogin = async (ev) => {
        ev.preventDefault();

        const headers = {}

        const body = {
            username: form.username,
            password: form.password,
        };
        try {
            const response = await axios.post(`${BASE_URL}/login`, body, headers)

            if (checked) {
                setToken([response.data.newToken]);      
            }else{
                setSessionToken([response.data.newToken])
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Efetuado Com Sucesso",
                showConfirmButton: false,
                timer: 1500
            })
            clear("")
            goToHome(navigate)
            setIsValid(true)     
        } catch (error) {
            switchErrorLogin(error)
        }
    }

    return (
        <>
            <StyledMain>
                <HeaderLogin/>
                <StyledLogin className="container container-flex justify-content-center mt-4" style={{
                    color: "green"
                }}>
                    <StyledForm onSubmit={onSubmitFormLogin}>
                        <h1> Login</h1>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example1" className="form-control"
                                placeholder="Digite seu Username"
                                autoComplete="off"
                                value={form.username}
                                onChange={onChange}
                                name="username"
                            />
                            <div id="emailHelp" className="form-text">Jamais iremos compartilhar seu username</div>
                            <label className="form-label" htmlFor="formEmail"
                            >Username</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control"
                                autoComplete="off"
                                value={form.password}
                                onChange={onChange}
                                name="password"
                                placeholder="Digite sua Senha"
                            />
                            <div id="emailHelp" className="form-text">A mesma usada para registrar.</div>
                            <label className="form-label" htmlFor="formPassword"
                            >Password</label>
                        </div>
                        <div className="row mb-4" id="form-check">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check" >
                                    <input className="form-check-input"
                                        type="checkbox"
                                        value={false}
                                        onClick={onCLickCheckbox}
                                        style={{ "color": "green" }}
                                        id="form-check-input"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example31"> Lembre-me </label>
                                </div>
                            </div>
                            <div className="col">
                                <a href="#!" style={{ color: "green" }}>Esqueceu a Senha?</a>
                            </div>
                        </div>
                        <ButtonLogin>
                            <button type="submit" className="btn btn-success">ENVIAR</button>
                        </ButtonLogin>
                    </StyledForm>
                </StyledLogin>
            </StyledMain>
        </>

    )
}