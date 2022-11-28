import Footer_section from "../../components/sections/footer-section";
import ChartSellByCategory from "../../components/sections/graphs-section/chart";
import HistorySell from "../../components/sections/graphs-section/sell-history";
import Header_section from "../../components/sections/header-section";
import { Container, Main } from "./styles";

export default function AdminPage(){
    return(
        <Container>
            <Header_section/>
            <h1>Painel de informações</h1>
            <Main>
                
                <div id="chartdiv">
                    <ChartSellByCategory/>
                </div>
                <HistorySell/>
            </Main>

            <Footer_section/>
        </Container>
    )
}