import { useEffect, useState } from "react"
import Header_section from "../../components/sections/header-section"
import { Container, Main } from "./styles"
import { useParams } from "react-router-dom"
import productProps from "../../utility/productDTO"
import Destaque_section from "../../components/sections/destaque-section"

export default function CategoryPage(){

    const [singleProductData, setSingleProductData] = useState<productProps>()
    const {productId} =  useParams();
    
    useEffect(() => {

        window.scrollTo(0,0)

        async function getSingleProductData(){

            await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`,
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setSingleProductData(data))

        }

        getSingleProductData()
    },[productId])

    return(
        <>
        <Header_section/>
        
        <Container>

            {/* <product-section
            title={singleProductData?.title}
            price={singleProductData?.price}
            imglink = []
            /> */}

            <section>
                
            </section>

            <Main>
                <Destaque_section/>
            </Main>

        </Container>
        </>

    )
}