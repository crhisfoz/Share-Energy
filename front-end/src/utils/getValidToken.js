/* eslint-disable react-hooks/rules-of-hooks */
import { useGetToken } from './../hooks/useGetToken';

export const getValidToken = async (token, setIsValid) => {

    if (token.length !== 0) {
        const headers = {
            headers: {
                Authorization: token,
            },
        };

        try {
            const response = await useGetToken(headers)

            setIsValid(response.ok)

        } catch (error) {
            setIsValid(error.ok)
        }

    }
    setIsValid(false)
}




