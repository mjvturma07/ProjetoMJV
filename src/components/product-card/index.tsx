import {Container} from "./style"
import {useState} from "react"
import { Link } from "react-router-dom";

interface inputProps{
    image: string,
    title:string,
    category:string,
    price: number,
    key: number,
    id: number,
    description?: string,
}

export default function ProductCard({image, title, category, price,description,id}:inputProps){
    const [isShown, setIsShown] = useState(false);

    return(
        <Link style={{textDecoration: "none"}} to={`/produto/${id}`}>
            <Container onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            
                <img loading="lazy" src={image}alt={title} />
                <section className="text">
                    <h2 className="category">{category}</h2>
                    <h3 className="title">{title}</h3>
                    <h4>R$ {price},00</h4>
                    { isShown && <p>{description}</p> }
                    { isShown && <button onClick={()=>{}} className="comprar">Comprar agora</button> }
                </section>
            
            </Container>
        </Link>
    )
}