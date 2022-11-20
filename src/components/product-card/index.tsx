import {Container} from "./style"
import {useState} from "react"

interface inputProps{
    image: string,
    title:string,
    category:string,
    price: number,
    key: number,
}

export default function ProductCard({image, title, category, price,key}:inputProps){
    const [cardOpen, setCardOpen] = useState(false)

    function openCard(){
        if (!cardOpen){
            setCardOpen(true)
        } else {setCardOpen(false)}
    }

    return(
        <Container key={key} onClick={openCard} open={cardOpen}>
            
            <img loading="lazy" src={image} alt={title} />

            <section className="text">

                <h2 className="category">{category}</h2>
                <h3 className="title">{title}</h3>
                <h4>R$ {price},00</h4>

                { cardOpen && <button className="comprar">Comprar agora</button> }

            </section>

        </Container>
    )
}