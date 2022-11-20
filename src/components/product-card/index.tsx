import { ReactNode } from "react";
import {Container} from "./style"

interface inputProps{
    image: string,
    title:string,
    category:string,
    price: number,
}

export default function ProductCard({image, title, category, price}:inputProps){
    return(
        <Container>
            <img src={image} alt={title} />
            <section id="text">
                <h3>{category}</h3>
                <h2 id="title">{title}</h2>
                <h4>R$ {price},00</h4>
                <button id="comprar">Comprar agora</button>
            </section>
        </Container>
    )
}