import { BASE_URL } from "../constants/urls";

const headers = {
    headers: {
      Authorization: "USER_AUTHORIZED",
    },
  };

export const useGetData = async () => {
    try {
        const response = await fetch(`${BASE_URL}`, headers)
        return await response.json()
    }
    catch (error){
      
    }
}

