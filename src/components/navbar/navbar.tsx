import { Link } from "react-router-dom"
import { FaShoppingCart, FaLongArrowAltDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {getCategoury} from "../../api/api"
import {CategouryObj} from "../../typescritp-types/types"
function NavBar() {
    const [navToggle, setNavToggle] = useState<boolean>();
    const [categouryToggle, setCategouryToggle] = useState<boolean>(false);
    const [getCategouryApi, setGetCategouryApi] = useState<[]>();
    useEffect(() => {
        if (window.innerWidth < 768) {
            setNavToggle(false)
        } else{
            setNavToggle(true)
        }
        getCategouryData()
    }, [])
    const getCategouryData = async()=>{
        await getCategoury().then((x)=>{
            setGetCategouryApi(x);
        })
    }
    return (
        <header className="w-full flex items-center justify-between bg-red-600
            py-3 px-1 text-white md:px-3 lg:px-8">
            <h1>
                <Link to="/" className="capitalize">
                    shop
                </Link>
            </h1>

            <input type="text" placeholder="search for ....." 
                className="w-3/5 pl-3 h-8 text-black outline-0 rounded md:w-2/4"
            />

            <div className="relative md:static">
                <FaBars className="text-3xl p-1 cursor-pointer transition hover:bg-red-700 md:hidden"
                    onClick={()=>{setNavToggle(!navToggle)}}/>

                <ul className={`absolute px-6 -right-1 top-10 bg-red-600 w-screen transition-all 
                    md:relative md:top-0 md:flex md:items-center md:w-[auto] ${
                    navToggle? "nav-show":"nav-hide"} ${categouryToggle? "categoury-remove-clip":""} `}>
                    <Link to="/" className=" flex flex-col">
                        <div className="nav-link w-full flex justify-center p-3"
                            onClick={()=>{
                                setCategouryToggle(!categouryToggle)
                            }}
                        >
                            categury <FaLongArrowAltDown className="ml-2"/>
                        </div>

                        <div className={`flex flex-col w-full transition-all md:absolute md:top-16
                            md:bg-red-600 md:rounded-bl-lg z-30 ${
                            categouryToggle? "categoury-show" : "categoury-hide h-0"
                        }`}>
                            {
                                getCategouryApi&& getCategouryApi.map((data:CategouryObj, index)=>{
                                    return (
                                        data.name === "Testing Category" ? null :
                                        data.name == "New Category"? null :
                                        (
                                            <div key={index}
                                                className="flex items-center py-3 my-2 relative z-0
                                                before:absolute before:-z-10 before:w-full before:h-0 
                                                before:transition-all before:bg-red-700 hover:before:h-full"
                                            >
                                                <img src={data.image} alt={data.name} 
                                                    className="w-16 pl-3"
                                                />
                                                <h3 className="ml-6">{data.name}</h3>
                                            </div>
                                        ))
                                })
                            }
                        </div>
                    </Link>

                    <Link to="/" className="nav-link">
                        <FaShoppingCart/>
                    </Link>

                    <Link to="/" className="nav-link">
                        sign in
                    </Link>
                </ul>
            </div>
        </header>
    )
}
export default NavBar