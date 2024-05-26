import { useEffect, useState } from "react"
import { getCategoury } from "../../api/api"
import { CategouryObj } from "../../typescritp-types/types"
import { Link } from "react-router-dom"
function CategouryCrousal() {
    const [getCategouryApi, setGetCategouryApi] = useState<[]>()
    useEffect(() => {
        categouryApi()
    }, [])
    
    const categouryApi= ()=>{
        getCategoury().then((res)=>{
            setGetCategouryApi(res)
        })
    }
    return (
        <div className="flex justify-start items-center w-full my-6 overflow-hidden">
            {getCategouryApi && getCategouryApi.map((data:CategouryObj, index)=>{
                return (
                    data.name === "Testing Category" ? null :
                    data.name == "New Category"? null :
                    <Link to="" key={index} className="relative w-96 mx-6">
                    <img src={data.image} alt={data.name} className="w-full block"/>
                    <h2 className="absolute left-2 bottom-3 text-white text-3xl
                    bg-slate-500 bg-opacity-45">{data.name}</h2>
            </Link>
                )
            })}
            
        </div>
    )
}
export default CategouryCrousal