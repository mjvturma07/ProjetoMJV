import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Slide } from "react-awesome-reveal";

interface categoryCardProps{
    categoryTitle: string,
    productQuantity?: string,
    imgLink: string,
    navigateLink: number,
}

export default function Category_card({categoryTitle,productQuantity,imgLink,navigateLink}:categoryCardProps){

    return(
        <Slide>
            <Link to={`/categorias/${navigateLink}`}>
                <Container>
                        <header>
                            <h2 className="categoryTitle">{categoryTitle}</h2>
                            <h3>Ver tudo</h3>
                        </header>

                        <section>
                            <img loading="lazy" width={150} height={112.5} src={imgLink} alt="" />
                        </section>
                </Container>
            </Link>
        </Slide>
    )
}