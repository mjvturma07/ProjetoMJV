import { Container } from "./styles";

interface categoryCardProps{
    categoryTitle: string,
    productQuantity?: string,
    imgLink: string,
}

export default function Category_card({categoryTitle,productQuantity,imgLink}:categoryCardProps){

    return(
        <Container>

            <header>
                <h2 className="categoryTitle">{categoryTitle}</h2>
                <a href="#">
                    <h3>Ver tudo</h3>
                </a>
            </header>

            <section>
                <img loading="lazy" width={150} height={112.5} src={imgLink} alt="" />
            </section>

        </Container>
    )
}