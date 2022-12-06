import { DestaqueContainer } from "./style";
import productProps from "../../utility/productDTO";
import {useState, useEffect} from "react"
import ProductCard from "../../components/product-card";

export default function Destaque_section(){
    const [destaqueProductsData, setDestaqueProductsData] = useState<productProps[]>()
    const [pageDestaques, setPageDestaques] = useState(0)

    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
        (async function getDestaqueData(){
 
            let products = pageDestaques * 4

            if (products === 1) {
                products = 0
            }
            await fetch(`https://api.escuelajs.co/api/v1/products?offset=${products}&limit=4`, {
                method: 'GET',
               }).then((res )=> res.json()).then((data) => setDestaqueProductsData(data))
            })();
    },[pageDestaques])

    return(
        <DestaqueContainer>
            <section className="productheader">
                <div className="flexrow">
                    <h2>Destaques da semana</h2>
                </div>

                <div className="flexrow">
                    <h3>Pagina: {pageDestaques +1}</h3>
                        <button className="pageArrow" onClick={ ()=> {
                            pageDestaques != 0 ? setPageDestaques(pageDestaques -1) : ''}
                        }
                            >
                        {"<"}
                    </button>
                    <button className="pageArrow" onClick={ ()=>{
                            setPageDestaques(pageDestaques + 1)}
                        }
                            >
                        {">"}
                    </button>
                </div>
            </section>

            <section className="products">
                {
                    destaqueProductsData?.map((product) => {
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
        </DestaqueContainer>
    )
}