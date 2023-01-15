import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './../../context/GlobalContext';
import { useForm } from './../../hooks/useForm';
import imgEmail from "../../assets/images/image-email.jpg"
import { goToHome } from './../../routes/Coordinator';
import axios from 'axios';
import { BASE_URL } from './../../constants/urls';
import Swal from 'sweetalert2';
import { switchErrorSignup } from "../../utils/switchErrorSignup";
import { HeaderSignup } from './../../components/header-signup/HeaderSignup';

export const Signup = () => {

  const navigate = useNavigate()

  const { setToken } = useContext(GlobalContext)
  const [form, onChange, clear] = useForm({
    username: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    cpf: ""
  });

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }


  const onSubmitFormSignup = async (ev) => {

    ev.preventDefault();
    const body = {
      username: form.username,
      name: form.name,
      email: form.email,
      password: form.password,
      repeatPassword: form.repeatPassword,
      phone: form.phone,
      address: form.address,
      cpf: form.cpf

    };

    try {

      const response = (await axios.post(`${BASE_URL}/signup`, body))
      setToken(response.data.token)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cadastro Efetuado Com Sucesso",
        showConfirmButton: false,
        timer: 1500
      })
      clear("")
      goToHome(navigate)

    } catch (error) {
      switchErrorSignup(error)

    }
  }

  return (

    <div className="contayner my-1 py-1 mb-2">
      <HeaderSignup />
      <section className="vh-100" style={{ backgrounColor: "white" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2">Registrar</p>

                      <form className="mx-1 mx-md-4" onSubmit={onSubmitFormSignup}>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-user-secret fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form-username"
                              className="form-control"
                              name="username"
                              value={form.username}
                              onChange={onChange}
                              minLength="5"
                              placeholder="Deve conter no mínimo 5 caracteres"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example1c">Seu UserName</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form-name"
                              className="form-control"
                              name="name"
                              value={form.name}
                              onChange={onChange}
                              minLength="8"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example2c">Seu Nome</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form-email"
                              className="form-control"
                              name="email"
                              value={form.email}
                              onChange={onChange}
                              placeholder="email@email.com"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">Seu Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type={passwordType}
                              id="form-password"
                              className="form-control"
                              name="password"
                              value={form.password}
                              onChange={onChange}
                              autoComplete="password"
                              spellCheck="false"
                              autoCorrect="off"
                              autoCapitalize="off"
                              minLength="8"
                              maxLength="20"
                              required
                            />
                            <i className="fas fa-solid fa-eye fa-lg me-3 fa-fw" onClick={togglePassword}></i>
                            {passwordType === "password" ?
                              <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                            <label className="form-label" htmlFor="form3Example4c">Sua Senha</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form-phone"
                              className="form-control"
                              name="phone"
                              value={form.phone}
                              onChange={onChange}
                              minLength="9"
                              placeholder="(99)99999-9999"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example6c">Seu Telefone</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-solid fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form-address"
                              className="form-control"
                              name="address"
                              value={form.address}
                              onChange={onChange}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example7c">Seu Endereço</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-solid fa-address-card fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form-cpf"
                              className="form-control"
                              name="cpf"
                              value={form.cpf}
                              onChange={onChange}
                              placeholder="000.000.000-00"
                              minLength="11"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example8c">Seu CPF</label>
                            <div id="cpfHelp" className="form-text">Jamais iremos compartilhar seus dados com ninguém</div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                          <button type="submit" className="btn btn-success btn-lg">ENVIAR</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={imgEmail}
                        className="img-fluid"
                        alt="imagem multicolorida de mulher com bolsa atravessando uma porta" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}