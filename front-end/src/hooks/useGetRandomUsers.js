import { RANDOM_URL } from "../constants/urls";

export const useGetRandomUsers = async (page, results) => {
    try {
        const response = await fetch(`${RANDOM_URL}?page=${page}&results=${results}&nat=br&inc=picture,email,name,dob,id&seed=abc`)
        return await response.json()
    }
    catch (error){
    }
}

