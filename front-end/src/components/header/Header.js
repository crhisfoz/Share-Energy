import React from "react"
import logo from "../../assets/images/logo-share.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import { goToHome, goBack } from './../../routes/Coordinator';
import "./style.css"

export const Header = () => {
    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img onClick={() => goToHome(navigate)} src={logo} alt="Logo share energy" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/#" onClick={() => goBack(navigate)}>Voltar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dogs">Dogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cats">Cats</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dogs">Dogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Usuários</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Registrar</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
