import imageNotFound from "../assets/images/not-found2.jpg"
import {CATS_URL} from "../constants/urls"

export const getImageCat = (code) =>{
    if(code === ""){
        return imageNotFound
    }
    if (code >= 100 && code <= 599) {
        return `${CATS_URL}/${code}`
    }
    return imageNotFound
}


