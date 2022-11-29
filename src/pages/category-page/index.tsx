import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container , Main } from "./styles"
import Category_section from "../../sections/category-section"
import Header_section from "../../sections/header-section"
import productProps from "../../utility/productDTO"
import ProductCard from "../../components/product-card"
import Footer_section from "../../sections/footer-section"

export default function CategoryPage(){

    const [singleCategoryData, setSingleCategoryData] = useState<productProps[]>([])
    const [categoryProductsPage, setCategoryProductsPage] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const {categoryId} =  useParams(); // Get param of URL to dinamicly to render page
    
    // Some products title are coming in capital letter and some not, this is to padronize

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        window.scrollTo(0,0); // Router-Dom link doesnt get to top of page, so i setted it manually

        (async function getSingleCategoryData(){
            await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setSingleCategoryData(data))
        })();

    },[categoryId,categoryProductsPage])

    function nextPage(){
        setCategoryProductsPage(categoryProductsPage + 4)
        let numberPages =  Math.round(singleCategoryData.length)
        if (categoryProductsPage > numberPages -8 ){
            setDisabled(true)
        }
        
    }

    function previousPage(){
        if (categoryProductsPage!=0){
            setCategoryProductsPage(categoryProductsPage - 4)
            setDisabled(false)
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
                                <button disabled={categoryProductsPage === 0 ? true : false} className="pageArrow" onClick={ ()=> {
                                    previousPage()}
                                }>
                                {"<"}
                            </button>
                            <button disabled={ disabled ? true : false} className="pageArrow" onClick={ ()=>{
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
                            description={product.description}
                            />
                            )
                        })
                    }
            </section>

            <Category_section title="Ver outras categorias"/>

            </Main>
        </Container>
        <Footer_section/>
        </>
    )
}