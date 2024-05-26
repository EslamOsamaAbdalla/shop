import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../api/api"
import { Products as ProductsType } from "../../typescritp-types/types"
function Products() {
    const [getAllProducts, setGetAllProducts] = useState<[]>()
    useEffect(() => {
        getProductsApi()
    }, [])
    const getProductsApi = async ()=>{
        await getProducts(0,10).then((data)=>{
            return setGetAllProducts(data)
        })
    }
    return (
        <div className="my-6 flex flex-wrap justify-center">
            {getAllProducts? (
                    getAllProducts.map((data:ProductsType)=>{
                        return(<Link to={`/product/${data.id}`} key={data.id}
                                    className="w-1/4 h-[34rem] flex flex-col items-center m-3 py-5 rounded-lg
                                         bg-blue-950 text-white">
                                    <img src={data.images[0]} alt={data.title}
                                        className="w-[80%] rounded-lg"/>
                                    <div className="w-[80%] flex flex-col items-start h-full mt-6">
                                        <h3 className=" font-bold">{data.title}</h3>
                                        <p className="text-sm text-gray-200 mt-1">
                                            {data.description.slice(0,30)}....
                                        </p>
                                    </div>
                                    <div className="p-2 border rounded-full self-start ml-10 mb-4 text-sm
                                        transition hover:bg-blue-900 hover:border-blue-900">
                                        {data.category.name}
                                    </div>
                                    <div className="flex justify-around items-center w-full mt-auto">
                                    <p><span className="text-sm text-gray-300">price: </span> $ {data.price}</p>
                                    <button className="border p-2 rounded-md transition capitalize bg-blue-900
                                        hover:bg-blue-800 hover:border-blue-900">
                                        add to cart
                                    </button>
                                    </div>
                            </Link>)
                    })
                    
                ) :"no Products"}
        </div>
    )
}
export default Products