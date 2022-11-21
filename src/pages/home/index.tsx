import { Container, Market } from "./style"
import Header_section from "../../components/sections/header"
import Main_section from "../../components/sections/main"
import Benefits_section from "../../components/sections/benefits-section"
import Destaque_section from "../../components/sections/destaque-section"
import Novidade_section from "../../components/sections/novidade-section"
import Timer_section from "../../components/sections/timer-section"


export default function Home(){

    return(

            <Container> 

                <Header_section/>
                <Main_section/>

                <Market>

                    <Timer_section/>

                    <Benefits_section/>

                    <Destaque_section/>

                    <Novidade_section/>

                </Market>

            </Container>

    )
} 
