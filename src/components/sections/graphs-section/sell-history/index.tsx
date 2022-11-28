import { Container } from "./styles";
import {FiArrowUp} from "react-icons/fi"
import SellHistoryCard from "../../../sell-history-card";

export default function HistorySell(){

    const customSellRecords = [
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        },
        {
            name: 'Custom sleep shoes',
            soldValue: "+ R$" + Math.round(Math.random()*500) + ",00",
            soldDate: '13/12/2022'
        }
    ]

    return(
        <Container>
            <h2>Vendas hoje: 112 <FiArrowUp color="green"/> <span style={{color: "green"}}>42%</span></h2>
            <h3>Entradas</h3>
            <section>
                <ul>
                    {customSellRecords.map(item => {
                        return(
                        <SellHistoryCard key={item.soldValue} productName={item.name} productPrice={item.soldValue} productSellDate={item.soldDate}/>
                        )
                    })}
                </ul>
            </section>
        </Container>
    )
}