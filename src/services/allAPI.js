import { commonAPI } from "../server/commonAPI"
import { serverURL } from "../server/serverURL"

//api to upload product details
export const uploadProduct=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/product`,reqBody)
}

// api to display all products
export const getAllProducts=async()=>{
    return await commonAPI('GET',`${serverURL}/product`,"")
}

// api to delete a product
export const deleteTheProduct=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/product/${id}`,{})
}