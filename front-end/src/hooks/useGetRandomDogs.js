import { DOGS_URL } from "../constants/urls";
import axios from "axios"

export const useGetRandomDogs = async () => {

    try {
        const {data} = await axios.get(`${DOGS_URL}`)

        const imageUrl = data.url
        
        return imageUrl
    }catch (error){
        console.log(error)
    }
}

