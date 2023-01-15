import Swal from 'sweetalert2'

export const switchErrorSignup = (error) => {
    if (error.response.status === 405) {
        Swal.fire({
            position: "top-end",
            icon: 'error',
            title: 'Oops...',
            text: " E-mail digitado já existe no banco de dados, verifique e tente novamente",
        })
        return
    }

    if (error.response.status === 422) {
        Swal.fire({
            position: "top-end",
            icon: 'error',
            title: 'Oops...',
            text: " E-mail digitado está incorreto, verifique e tente novamente",
        })
        return
    } if (error.response.status === 401) {
        Swal.fire({
            position: "top-end",
            icon: 'error',
            title: 'Oops...',
            text: "Senha digitada está em formato inválido, verifique e tente novamente",
        })
    } else {
        Swal.fire({
            position: "top-end",
            icon: 'error',
            title: 'Oops...',
            text: "Dados Incorretos, Digite Seus Dados Corretamente Para Efetuar O Cadastro",
        })
    }
}