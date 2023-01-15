import React from "react"
import logo from "../../assets/images/logo-share.jpg"
import { NavLink, useNavigate}  from "react-router-dom"
import { goBack } from '../../routes/Coordinator';
import "./style.css"

export const HeaderSignup = () => {
    const navigate = useNavigate()

    return (<>
        <header className="main-header">
        <img src={logo} alt="Logo share energy"/>
             <div className="container">
             <nav className="nav main-nav" >
                <ul>
                    <NavLink className="navlink" onClick={()=>goBack(navigate)}>
                        Voltar
                    </NavLink>
                    <NavLink className="navlink" to="/login">
                        Login
                    </NavLink>
                    <NavLink className="navlink" to="/signup">
                        Registrar
                    </NavLink>
                </ul>   
            </nav>
             </div>
        </header>
    </>
    )
}

