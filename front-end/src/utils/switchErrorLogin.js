import Swal from "sweetalert2"

export const switchErrorLogin = (error) => {

    if(error.message === "Network Error" ){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Erro de Conexão com banco de Dados, aguarde alguns instantes e tente novamente",
            showConfirmButton: false,
            timer: 1500
        })

    }
    if (error.response.status === 422 || 404) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "E-mail Incorreto, Confira o e-mail digitado Para Efetuar O Login",
            showConfirmButton: false,
            timer: 1500
        })
    }
    if (error.response.status === 401) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Senha Incorreta, Confira a senha digitada Para Efetuar O Login",
            showConfirmButton: false,
            timer: 1500
        })
    }
    if (error.response.status === 498) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Token Inválido, confira o token enviado ou limpe o cache do navegador para efetuar login",
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Dados incorretos, Confira e tenta novamente Para Efetuar O Login",
            showConfirmButton: false,
            timer: 1500
        })
    }

}