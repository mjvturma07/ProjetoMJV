import { Link } from "react-router-dom";
import { Container } from "./styles";

interface categoryCardProps{
    categoryTitle: string,
    productQuantity?: string,
    imgLink: string,
    navigateLink: number,
}

export default function Category_card({categoryTitle,productQuantity,imgLink,navigateLink}:categoryCardProps){

    return(
        <Container>

            <header>
                <h2 className="categoryTitle">{categoryTitle}</h2>

                <Link to={`/categorias/${navigateLink}`}>
                    <h3>Ver tudo</h3>
                </Link>

            </header>

            <section>
                <img loading="lazy" width={150} height={112.5} src={imgLink} alt="" />
            </section>

        </Container>
    )
}