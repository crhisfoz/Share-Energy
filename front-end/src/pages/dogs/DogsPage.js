/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react"
import { Header } from "../../components/header/Header"
import { StyledDogs, StyledContainerCard } from "./styles"
import { useGetRandomDogs } from "../../hooks/useGetRandomDogs";
import { GlobalContext } from "../../context/GlobalContext";
import { Spinner } from "../../components/spinner/Spinner";
import { useEffect } from 'react';
import { useProtectedPage } from './../../hooks/useProtectedpage';


export const DogsPage = () => {
    useProtectedPage()

    const { loading, setLoading } = useContext(GlobalContext);
    const [srcImage, setSrcImage] = useState(null);
    const [stateButton, setStateButton] = useState(true)

    useEffect(() => {

        (async () => {
            setLoading(true)
            setStateButton(false)
            try {
                const url = await useGetRandomDogs();

                if (url.endsWith('.jpg') || url.endsWith('.JPG') || url.endsWith('.png')){
                setSrcImage(url)
                setStateButton(false)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)

            }
        })()
    }, [stateButton, setLoading])

    return (
        <StyledDogs>
            <Header />
            <StyledContainerCard >
                <h1> Dogs Random</h1>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success" onClick={()=>setStateButton(true)}>Atualizar Imagem</button>
                </div>
                {loading ? (<Spinner/> ): (  <img src={srcImage} className="img-fluid card-img-top" alt="imagem aleatoria de caes vindo da Api http Dogs" 
                onLoad={()=> setLoading(false)}
                />) }
              
            </StyledContainerCard>
        </StyledDogs>
    )
}