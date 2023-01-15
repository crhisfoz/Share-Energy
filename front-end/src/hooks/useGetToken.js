import { BASE_URL } from "../constants/urls";

export const useGetToken = async (headers) => {
    try {
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/users/check-token`, headers)
=======
        const response = await fetch(`${BASE_URL}/check-token`, headers)
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
        return response
    }
    catch (error) {
        return await error
    }
}
