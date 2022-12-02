import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container , Main } from "./styles"
import Header_section from "../../sections/header-section"
import productProps from "../../utility/productDTO"
import Footer_section from "../../sections/footer-section"
import Destaque_section from "../../sections/destaque-section"

export default function ProductPage(){
    const [singleProductData, setSingleProductData] = useState<productProps>()

    const {productId} =  useParams(); // Get param of URL to dinamicly to render page
    
    // Some products title are coming in capital letter and some not, this is to padronize

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        window.scrollTo(0,0); // Router-Dom link doesnt get to top of page, so i setted it manually

        (async function getSingleCategoryData(){
            await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setSingleProductData(data))
        })();

    },[productId])

    return(
        <>
            <Header_section/>
            
            <Container>
                <Main>
                    <div className="row"> 
                        <img id="productimage" src={`${String(singleProductData?.images[0])}`} alt="" />
                        <section id="productdata">
                            <h1>{String(singleProductData?.title)} <br /></h1>
                            <h2>R${String(singleProductData?.price)},00 <br /></h2>
                            <h3>{String(singleProductData?.description)}</h3> <br />
                            <h4>Categoria: {String(singleProductData?.category.name)}</h4>
                            <button className="comprar">Comprar agora</button>
                        </section>
                    </div>

                    <Destaque_section/>
                </Main>
            </Container>
            
            <Footer_section/>
        </>
    )
}