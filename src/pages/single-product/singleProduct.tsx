import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../../api/api'
import { SingleProduct as  SingleProductType} from '../../typescritp-types/types'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft  } from "react-icons/fa";
function SingleProduct() {
  const [apiData, setApiData] = useState<SingleProductType>()
  const [imagesArray, setimagesArray] = useState<[]>()
  const [priceCounter, setPriceCounter] = useState<number>(0)
  const {productId} =  useParams()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getProductApi()
  }, [])
const getProductApi = async ()=>{
  await getSingleProducts(productId).then((data)=>{
    setimagesArray(data?.images)
    return setApiData(data)
  })
}
const nextImg = ()=>{
  const x:any = [...imagesArray as []];
  x.push(x.shift());
  setimagesArray(x)
}
const prevImg = ()=>{
  const x:any = [...imagesArray as []];
  x.unshift(x.pop());
  setimagesArray(x)
}
const setCounter = (type: string)=>{
  switch (type) {
    case "+":
      setPriceCounter(priceCounter + 1)
      break;
    case "-":
      if (priceCounter == 0) {
        break
      }
      setPriceCounter(priceCounter - 1)
      break;
    default:
      break;
  }
}
  return (
    <>
      {apiData && (
        <div className='w-[97vw] h-[55.2vh] mx-2 flex justify-between my-6 border-y-2 border-blue-950'>
          <div className='w-1/4 relative [&>*:nth-child(2)]:hidden [&>*:nth-child(3)]:hidden'>
          {Array.isArray(imagesArray)&& imagesArray.map((img, index)=>{
            return (
              <img src={img} alt={apiData.title} key={index} 
              className=' absolute left-0 top-0'/>
            )
          })}
          <span className='absolute left-10 bottom-10 text-4xl cursor-pointer transition 
            text-blue-950 hover:text-blue-900'>
            <FaArrowAltCircleLeft onClick={prevImg}/>
          </span>
          <span className='absolute right-10 bottom-10 text-4xl cursor-pointer transition 
            text-blue-950 hover:text-blue-900'>
            <FaArrowAltCircleRight onClick={nextImg}/>
          </span>
          </div>
          <div className=' w-2/3 mr-6'>
            <h2 className='text-2xl my-6'>{apiData.title}</h2>
            <p className='text-sm mb-6'>{apiData.description}</p>
            <div className='flex items-center  w-1/5 my-3 p-1 rounded-full bg-blue-950 
              hover:bg-blue-900 cursor-pointer'>
              <img src={apiData.category.image} alt={apiData.category.name} 
              className='w-10 rounded-full'/>
              <h3 className='text-xl ml-3 text-white'>{apiData.category.name}</h3>
            </div>
            <div className='flex mt-20 ml-auto items-center justify-between w-2/5'>
              <p className=' font-bold capitalize'>price: {apiData.price} $</p>
              <div className='flex justify-center items-center'>
                <button className='w-8 h-8 bg-blue-900 hover:bg-blue-950'
                  onClick={()=>{setCounter("+")}}>+</button>
                <span className=' w-8 h-8 border border-y-blue-950
                  flex justify-center items-center'>
                  {priceCounter}
                </span>
                <button className='w-8 h-8 bg-blue-900 hover:bg-blue-950'
                  onClick={()=>{setCounter("-")}}>-</button>
              </div>
              <button className='rounded p-2 text-white capitalize bg-blue-900 transition 
                  hover:bg-blue-950'>
                add to cart
              </button>
            </div>
          </div>
        </div>
        
      )}
    </>
  )
}
export default SingleProduct