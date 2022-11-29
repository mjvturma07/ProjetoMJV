import { VictoryPie } from 'victory';
import { Container } from './styles';

export default function Pie(){

const dataExample = [
    { x: "Boleto", y: 35 },
    { x: "Cartão", y: 40 },
    { x: "Pix", y: 55 }
]

return(
    <Container>
        <h2>Metódos de pagamento usados</h2>
        <VictoryPie
        colorScale={["tomato", "gold",  "navy" ]}
        data={dataExample}
        />
    </Container>
)
}