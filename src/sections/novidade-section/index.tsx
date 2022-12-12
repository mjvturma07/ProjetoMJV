// import { NovidadeContainer } from "./style";
import productProps from "../../utility/productDTO";
import {useState, useEffect} from "react"
import ProductCard from "../../components/product-card";
import { CarouselContainer } from "../../styles/CarouselContainer";

export default function Novidade_section(){

    const [novidadeProductsData, setnovidadeProductsData] = useState<productProps[]>()
    const [pageNovidades, setPageNovidades] = useState(0)

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
        (async function getNovidadesData(){
            let products = pageNovidades * 8

            if (products === 1) {
                products = 0
            }

            await fetch(`https://api.escuelajs.co/api/v1/products?offset=${products}&limit=8`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setnovidadeProductsData(data))
        })();

    },[pageNovidades])


    return(
        <CarouselContainer>
            <section className="productheader">

                <div className="flexrow">
                    <h2>Novidades</h2>
                </div>

                <div className="flexrow">

                    <button className="pageArrow" onClick={ ()=> pageNovidades != 0 ? setPageNovidades(pageNovidades -1) : ''}>
                        {"<"}
                    </button>

                    <div className="pageNumber">
                        <h3>{pageNovidades +1}</h3>
                    </div>

                    <button className="pageArrow" onClick={ ()=> setPageNovidades(pageNovidades + 1)}>
                        {">"}
                    </button>
                            
                </div>

            </section>
                    
            <section className="products">
                {
                    novidadeProductsData?.slice(0,8).map((product) => {
                        return(
                            <ProductCard
                            category={product.category.name}
                            image={product.images[0]}
                            price={product.price}
                            title={capitalizeFirstLetter(product.title)}
                            key={product.id}
                            id={product.id}
                            description={product.description}
                            />
                            )
                    })
                }
            </section>
        </CarouselContainer>
    )
}