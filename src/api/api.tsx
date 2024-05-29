import { SingleProduct } from "../typescritp-types/types";
export const getCategoury = async ()=>{
    let data:[] | undefined;
    await fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}
export const getProducts = async (offset:number, limit:number)=>{
    let data:[] | undefined;
    await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`).then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}
export const getSingleProducts = async (productId:string | undefined)=>{
    let data:SingleProduct | undefined;
    await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`).then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}