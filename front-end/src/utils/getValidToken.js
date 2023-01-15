/* eslint-disable react-hooks/rules-of-hooks */
import { useGetToken } from './../hooks/useGetToken';

export const getValidToken = async (token, setIsValid) => {

<<<<<<< HEAD

    const headers = {
        headers: {
            Authorization: token,
        },
    };

=======
    if (token.length !== 0) {
        const headers = {
            headers: {
                Authorization: token,
            },
        };

>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
        try {
            const response = await useGetToken(headers)

            setIsValid(response.ok)

        } catch (error) {
            setIsValid(error.ok)
        }

    }
    setIsValid(false)
}




<<<<<<< HEAD



=======
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
