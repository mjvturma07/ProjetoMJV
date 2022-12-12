import { useEffect, useState } from "react";
import Category_card from "../../components/category-card";
import { Container } from "./style";

interface categoriesProps{
    id: number,
    image: string,
    name: string,
}

interface categorySection{
    title:string
}

export default function Category_section({title}:categorySection){
    const [categoriesData, setCategoriesData] = useState<categoriesProps[]>()

    useEffect(()=>{
        (async function getNovidadesData(){

            await fetch(`https://api.escuelajs.co/api/v1/categories`, 
            {method: 'GET',})
            .then((res )=> res.json())
            .then((data) => setCategoriesData(data))

        })();
    },[])
    return(
        <Container>
                <div className="flexrow">
                    <h2>{title}</h2>
                </div>
            <section className="productheader">
            </section>

            <section className="categoryDiv">
            
                {categoriesData?.slice(0,5).map(category => {
                    return (
                        <Category_card
                        key={category.id}
                        navigateLink={category.id}
                        categoryTitle={category.name}
                        imgLink={category.image}
                        />
                    )
                })}

            </section>
        </Container>
    )
}