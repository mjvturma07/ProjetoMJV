import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Slide } from "react-awesome-reveal";

interface categoryCardProps{
    categoryTitle: string,
    productQuantity?: string,
    imgLink: string,
    navigateLink: number,
}

export default function Category_card({categoryTitle,imgLink,navigateLink}:categoryCardProps){

    return(
        <Slide>
            <Link to={`/categorias/${navigateLink}`} style={{textDecoration: "none"}}>
                <Container>
                    <h2 className="categoryTitle">{categoryTitle}</h2>
                    <img loading="lazy" src={imgLink} alt="" />
                    <h3>Ver tudo</h3>
                </Container>
            </Link>
        </Slide>
    )
}