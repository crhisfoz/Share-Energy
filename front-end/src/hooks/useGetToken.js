import { BASE_URL } from "../constants/urls";

export const useGetToken = async (headers) => {
    try {
        const response = await fetch(`${BASE_URL}/check-token`, headers)
        return response
    }
    catch (error) {
        return await error
    }
}
