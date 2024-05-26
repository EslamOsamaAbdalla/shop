export const getCategoury = async ()=>{
    let data:[] | undefined;
    await fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}
export const getProducts = async (limit:number, offset:number)=>{
    let data:[] | undefined;
    await fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`).then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}