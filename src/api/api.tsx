export const getCategoury = async ()=>{
    let data:[] | undefined;
    await fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>{
                return res.json()
        }).then((res)=>{
            return data = res
        })
        return data
}