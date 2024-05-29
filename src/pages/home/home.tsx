import CategouryCrousal from "../../components/categoury-crousal/categoury-crousal"
import Pagenation from "../../components/pagenation/pagenation"
import Products from "../../components/products/products"

function Home() {
    return (
        <div>
            <CategouryCrousal/>
            <Products/>
            <Pagenation/>
        </div>
    )
}
export default Home