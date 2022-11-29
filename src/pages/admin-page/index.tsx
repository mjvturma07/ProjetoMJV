import Footer_section from "../../components/sections/footer-section";
import ChartSellByCategory from "../../components/sections/graphs-section/chart";
import Pie from "../../components/sections/graphs-section/pie";
import HistorySell from "../../components/sections/graphs-section/sell-history";
import Header_section from "../../components/sections/header-section";
import SellHistoryCard from "../../components/sell-history-card";
import { Container, Main } from "./styles";

export default function AdminPage(){
    return(
        <Container>
            <Header_section/>
            <h1>Painel de informações</h1>
            <Main>
                <div id="chartdiv">
                    <h2>Vendas/mês por categoria</h2>
                    <ChartSellByCategory/>
                </div>
                <HistorySell/>
            </Main>

            <Main>  
                <Pie/>
                <section id="totalvendas">
                    <h2>Total de vendas</h2>
                    <div className="divrow">
                        <SellHistoryCard productPrice="R$22.350,00" productSellDate="Hoje" key={"day"}/>
                        <SellHistoryCard productPrice="R$133.310,00" productSellDate="Semana" key={"Semana"}/>
                    </div>
                    <div className="divrow">
                        <SellHistoryCard productPrice="R$514.610,00" productSellDate="Mês" key={"Mês"}/>
                        <SellHistoryCard productPrice="R$7.883.330,00" productSellDate="Ano" key={"Ano"}/>
                    </div>
                </section>
            </Main>

            <Footer_section/>
        </Container>
    )
}