import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "./styles"
import Header_section from "../../sections/header-section"
import productProps from "../../utility/productDTO"
import Footer_section from "../../sections/footer-section"
import Destaque_section from "../../sections/destaque-section"

export default function ProductPage(){
    const [singleProductData, setSingleProductData] = useState<productProps>()
    const {produtoId} =  useParams(); // Get param of URL to dinamicly to render page

    useEffect(() => {
        (async function getSingleCategoryData(){
            await fetch(`https://api.escuelajs.co/api/v1/products/${produtoId}`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setSingleProductData(data))
        })();

        setTimeout(()=>{
            window.scrollTo(0,0); // Router-Dom link doesnt get to top of page, so i setted it manually, timeout to avoid bugs
        },80)

    },[produtoId])

    function alert(){
        window.alert("Isso é apenas um Demo, não é possivel finalizar a compra")
    }

    return(
        <>
            <Header_section/>

            <Container>
                <div className="row"> 
                    <img id="productimage" src={`${String(singleProductData?.images[0])}`} alt="" />
                    <section id="productdata">
                        <h1>{String(singleProductData?.title)}</h1>
                        <h2>R${String(singleProductData?.price)},00</h2>
                        <h3>{String(singleProductData?.description)}</h3>
                        <h4>Categoria: {String(singleProductData?.category.name)}</h4>
                        <button onClick={alert} className="comprar">Comprar agora</button>
                    </section>
                </div>

                <Destaque_section/>
            </Container>
            
            <Footer_section/>
        </>
    )
}