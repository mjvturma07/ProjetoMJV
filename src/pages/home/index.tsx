import { Container, Market } from "./style"
import Header_section from "../../components/sections/header"
import Main_section from "../../components/sections/main"
import Search_section from "../../components/sections/search-section"
import Benefits_section from "../../components/sections/benefits-section"
import Destaque_section from "../../components/sections/destaque-section"
import Novidade_section from "../../components/sections/novidade-section"

export default function Home(){

    return(
        <Container>

            <Header_section/>
            <Main_section/>

            <Market>

                <Search_section/>
                <Benefits_section/>

                <Destaque_section/>
                <Novidade_section/>

                
            </Market>

        </Container>
    )
} 
