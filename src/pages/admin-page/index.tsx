import Footer_section from "../../components/sections/footer-section";
import ChartSellByCategory from "../../components/sections/graphs-section/chart";
import Header_section from "../../components/sections/header-section";
import { Container, Main } from "./styles";

export default function AdminPage(){
    return(
        <Container>
            <Header_section/>

            <Main>
                
                <h1>Painel de informações</h1>

                <ChartSellByCategory/>

            </Main>

            <Footer_section/>
        </Container>
    )
}