import { FaArrowCircleLeft, FaArrowAltCircleRight  } from "react-icons/fa";
function Pagenation() {
    return (
        <div className="flex items-center justify-center">
            <button className="pagenation-item"><FaArrowCircleLeft/></button>
            <button className="pagenation-item">1</button>
            <button className="pagenation-item">2</button>
            <button className="pagenation-item">3</button>
            <button className="pagenation-item"><FaArrowAltCircleRight/></button>
        </div>
    )
}
export default Pagenation