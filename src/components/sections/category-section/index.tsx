import { useEffect, useState } from "react";
import Category_card from "../../category-card";
import { Container } from "./style";

interface categoriesProps{
    id: number,
    image: string,
    name: string,
}

export default function Category_section(){

    const [categoriesData, setCategoriesData] = useState<categoriesProps[]>()

    useEffect(()=>{

        async function getNovidadesData(){

            await fetch(`https://api.escuelajs.co/api/v1/categories`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setCategoriesData(data))

        }
        getNovidadesData()
    },[])
    return(
        
        <Container>

            <section className="productheader">

                <div className="flexrow">
                    <h2>Categorias</h2>
                    <button>Todas as categorias ➩</button>
                </div>

            </section>

            <section className="categoryDivCol">

                <section className="categoryDivRow">
                
                    {categoriesData?.slice(0,3).map(category => {
                        return (
                            <Category_card
                            key={category.id}
                            categoryTitle={category.name}
                            imgLink={category.image}
                            />
                        )
                    })}

                </section>

                <section className="categoryDivRow">

                    {categoriesData?.slice(3,5).map(category => {
                        return (
                            <Category_card
                            key={category.id}
                            categoryTitle={category.name}
                            imgLink={category.image}
                            />
                        )
                    })}

                </section>  
            </section>

        </Container>
    )
}