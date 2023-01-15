import React from "react";

import { StyledFilterContainer, StyledSearch } from "./styles";

export const Search = (props) => {

    const {input, onChangeInput} = props.dataProps;

    return (
        <>
            <StyledFilterContainer>
                <h4> BUSCAR</h4>
                <StyledSearch className="filter"
                placeholder="Digite o nome de Usuário"
                type= "text"
                name="search"
                value={input}
                onChange={onChangeInput}
                />   
            </StyledFilterContainer>
        </>
    )
}
