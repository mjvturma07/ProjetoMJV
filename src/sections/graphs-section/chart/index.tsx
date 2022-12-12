import { VictoryBar,VictoryChart,VictoryAxis,VictoryTheme,VictoryStack,VictoryLegend,VictoryTooltip } from 'victory';
import { Container } from './style';

export default function ChartSellByCategory(){

    // Custom DATA, because study API doesnt support sell history data

    const clothes = [
        {quarter: 1, earnings: 5000},
        {quarter: 2, earnings: 2500},
        {quarter: 3, earnings: 3000},
        {quarter: 4, earnings: 6000}
        ];
    
        const eletronics = [
        {quarter: 1, earnings: 5000},
        {quarter: 2, earnings: 3333},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 9000}
        ];
    
        const furniture = [
        {quarter: 1, earnings: 5000},
        {quarter: 2, earnings: 1111},
        {quarter: 3, earnings: 3333},
        {quarter: 4, earnings: 9000}
        ];
    
        const shoes = [
        {quarter: 1, earnings: 5000},
        {quarter: 2, earnings: 9999},
        {quarter: 3, earnings: 2777},
        {quarter: 4, earnings: 1110}
        ];
    
        const other = [
        {quarter: 1, earnings: 5000},
        {quarter: 2, earnings: 1110},
        {quarter: 3, earnings: 4250},
        {quarter: 4, earnings: 9000}
        ];

        // Function to transform eanings of every object into an array to insert into VictoryBar component
    
        function getLabels(array:{quarter: number,earnings: number,}[]){
            let newArray = []
            for(let item of array){
                newArray.push('R$' + item.earnings + ',00')
            }
            return newArray
        }

    return(
    <Container>
        
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>

            <VictoryLegend x={325} y={50}
            title="Legenda"
            centerTitle
            orientation="vertical"
            gutter={15}
            style={{ border: { stroke: "black" }, title: {fontSize: 15 },}}
            data={[
            { name: "Clothes", symbol: { fill: "tomato" } },
            { name: "Eletronics", symbol: { fill: '#FFF59D' } },
            { name: "Furniture", symbol: { fill: "#DCE775" } },
            { name: "Shoes", symbol: { fill: "#8BC34A" } },
            { name: "Other", symbol: { fill: "#00796B" } }
            ]}
            />

            <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Agosto", "Setembro", "Outubro", "Novembro"]}
            />

            <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`R$${x / 1000}k`)}
            />

            <VictoryStack animate={true}>

                <VictoryBar
                data={clothes}
                x="quarter"
                y="earnings"
                labels={getLabels(clothes)}
                labelComponent={<VictoryTooltip/>}
                />

                <VictoryBar
                data={eletronics}
                x="quarter"
                y="earnings"
                labels={getLabels(eletronics)}
                labelComponent={<VictoryTooltip/>}
                />

                <VictoryBar
                data={furniture}
                x="quarter"
                y="earnings"
                labels={getLabels(furniture)}
                labelComponent={<VictoryTooltip/>}
                />

                <VictoryBar
                data={shoes}
                x="quarter"
                y="earnings"
                labels={getLabels(shoes)}
                labelComponent={<VictoryTooltip/>}
                />

                <VictoryBar
                data={other}
                x="quarter"
                y="earnings"
                labels={getLabels(other)}
                labelComponent={<VictoryTooltip/>}
                />
                
            </VictoryStack>
        </VictoryChart>
    </ Container>
    )
}