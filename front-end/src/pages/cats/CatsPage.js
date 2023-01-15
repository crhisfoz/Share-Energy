/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import { Header } from "../../components/header/Header"
import { StyledCats, StyledContainerCard, StyledForm } from "./styles"
import { useForm } from './../../hooks/useForm'; 
import { getImageCat } from './../../utils/getImageCat';
import { useProtectedPage } from './../../hooks/useProtectedpage';


export const CatsPage = () => {

    useProtectedPage()

    const [form, onChange, clear] = useForm({ code: "" });
    const [visible, setVisible] = useState(false);
    const [srcImage, setSrcImage] = useState(null);

    const onSubmitFormCode = async (ev) => {
        ev.preventDefault();

        const body = {
            code: form.code.trim(),
        };

        try {

         if(body.code === ""){
            setVisible(false)
         }else{
            const url = getImageCat(body.code)
            console.log("url==>", url)
            setSrcImage(url)
            setVisible(true)
            clear("")
         }          
        } catch (error) {
        console.log(error)

        }
    }
    return (
        <StyledCats>
            <Header />
            <StyledForm className="row g-3" onSubmit={onSubmitFormCode}>
                <div className="col-auto">
                    <label htmlFor="staticEmail2" >Digite o código para pesquisar</label>
                    <input
                     type="text" 
                     className="form-control-plaintext"
                     id="form-text" 
                     />
                </div>
                <div className="col-auto">
                    <label htmlFor="inputCode" className="visually-hidden"></label>
                    <input
                     type="text" 
                     className="form-control" 
                     id="form-code"
                     value={form.code}
                     name="code"
                     onChange={onChange}
                     placeholder="Digite de 100 a 599 "
                      />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success">Pesquisar</button>
                </div>
            </StyledForm>

            <StyledContainerCard >
                <h1> Cats Random</h1>
                {visible ?  (
                <img src={srcImage}className="img-fluid card-img-top" alt="imagem aleatoria de gatos vindo da Api http Cats" />)
                : (<></>)}        
            </StyledContainerCard>
        </StyledCats>
    )
}