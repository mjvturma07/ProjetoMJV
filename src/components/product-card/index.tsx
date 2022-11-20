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
            
            <img loading="lazy" src={image} alt={title} />

            <section className="text">
                <h2>{category}</h2>
                <h3 className="title">{title}</h3>
                <h4>R$ {price},00</h4>
                <button className="comprar">Comprar agora</button>
            </section>

        </Container>
    )
}