import { useEffect, useRef, useState } from "react"
import { getCategoury } from "../../api/api"
import { CategouryObj } from "../../typescritp-types/types"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from "react-icons/fa";

function CategouryCrousal() {
    const [getCategouryApi, setGetCategouryApi] = useState<[]>()
    const [translateCrousalNum, setTranslateCrousalNum] = useState<number>(0)
    const crousal = useRef<any>()
    useEffect(() => {
        categouryApi()
    }, [])
    const categouryApi= ()=>{
        getCategoury().then((res)=>{
            setGetCategouryApi(res)
        })
    }
    return (
        <div className="w-full overflow-hidden">
            <div className={`transition-all my-6 flex flex-nowrap w-[5800px] `} ref={crousal}>
                {getCategouryApi && getCategouryApi.map((data:CategouryObj, index)=>{
                    return (
                        data.name === "Testing Category" ? null :
                        data.name == "New Category"? null :
                        data.name == "Test Category"? null :
                        data.name == "New C"? null :
                        <Link to="" key={index} className="relative w-[300px] h-[300px] mx-5 inline-block">
                        <img src={data.image} alt={data.name} className="w-full h-full"/>
                        <h2 className="absolute left-2 bottom-3 text-white text-3xl
                        bg-slate-500 bg-opacity-45">{data.name}</h2>
                        </Link>)
                })}
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="text-4xl mx-1"
                onClick={()=>{
                    if (crousal.current.style.translate == "0px") {
                        return
                    }
                    let x = translateCrousalNum - 340
                    setTranslateCrousalNum(x)
                    crousal.current.style.translate = `-${x}px`
                }}>
                    <FaArrowAltCircleLeft/>
                </button>
                <button className="text-4xl mx-1"
                    onClick={()=>{
                        if (crousal.current.style.translate == "-1700px") {
                            return
                        }
                        let x = translateCrousalNum + 340
                        setTranslateCrousalNum(x)
                        crousal.current.style.translate = `-${x}px`
                    }}>
                    <FaArrowAltCircleRight/>
                </button>
            </div>
        </div>
        
    )
}
export default CategouryCrousal