import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleCard } from "./StyledCard";

export const CardUserRandom = (props) => {

    const navigate = useNavigate();

    return (
        <StyleCard className="card" style={{ width: "16rem" }}>
            <img src={props.image} className="card-img-top" alt="imagens de pessoas aleatótias vindo da Api" />
            <div className="card-body">
                <div className="title">
                    <h5 className="card-title">{props.name.title}</h5>
                    <h5> <strong>Age: </strong>{props.dob.age}</h5>
                </div>
                <h6 className="card-text"><strong>Name: </strong>{props.name.first} {props.name.last}</h6>
                <p> <strong>E-mail: </strong>{props.email}</p>
            </div>
        </StyleCard>
    );
}