import { useEffect, useState } from "react"
import Category_section from "../../components/sections/category-section"
import Header_section from "../../components/sections/header-section"
import { Container , Main } from "./styles"
import { useParams, useSearchParams } from "react-router-dom"
import productProps from "../../utility/productDTO"
import ProductCard from "../../components/product-card"

export default function CategoryPage(){

    const [singleCategoryData, setSingleCategoryData] = useState<productProps[]>([])
    const [categoryProductsPage, setCategoryProductsPage] = useState(0)
    const {categoryId} =  useParams();
    

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {

        window.scrollTo(0,0)

        async function getSingleCategoryData(){

            await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setSingleCategoryData(data))

        }

        getSingleCategoryData()
        console.log(singleCategoryData)

    },[categoryId,categoryProductsPage])

    function nextPage(){
        setCategoryProductsPage(categoryProductsPage + 4)
    }

    function previousPage(){
        if (categoryProductsPage!=0){
            setCategoryProductsPage(categoryProductsPage - 4)
        }
    }


    return(
        <>
        <Header_section/>
        
        <Container>
        
            <Main>

            <section className="productheader">
                        <div className="flexrow">
                            <h2>Produtos da categoria</h2>
                        </div>

                        <div className="flexrow">
                                <button className="pageArrow" onClick={ ()=> {
                                    previousPage()}
                                }>
                                {"<"}
                            </button>
                            <button className="pageArrow" onClick={ ()=>{
                               nextPage()}
                                }
                                 >
                                {">"}
                            </button>
                        </div>
            </section>
                
                <section className="products">
                        {   
                            singleCategoryData?.slice(categoryProductsPage,categoryProductsPage +4).map((product) => {
                                return(
                                <ProductCard
                                category={product.category.name}
                                image={product.images[0]}
                                price={product.price}
                                title={capitalizeFirstLetter(product.title)}
                                key={product.id}
                                />
                                )
                            })
                        }
                </section>

                <Category_section title="Ver outras categorias"/>
            </Main>

        </Container>
        </>

    )
}