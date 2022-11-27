import { Fade } from "react-awesome-reveal";
import { Container, Market } from "./style"
import Main_section from "../../components/sections/main-section"
import Benefits_section from "../../components/sections/benefits-section"
import Destaque_section from "../../components/sections/destaque-section"
import Novidade_section from "../../components/sections/novidade-section"
import Timer_section from "../../components/sections/timer-section"
import Header_section from "../../components/sections/header-section"
import Category_section from "../../components/sections/category-section"
import Footer_section from "../../components/sections/footer-section";

export default function Home(){
    return(
        <Container> 
            <Header_section/>
            
            <Fade direction={'left'} triggerOnce={true} className="timerdiv">
                <Main_section/>
            </Fade>

            <Market>
                <Fade direction={'down'} className="timerdiv">
                    <Timer_section/>
                </Fade>
                    
                <Fade direction={'down'}>
                    <Benefits_section/>
                </Fade>


                <Destaque_section/>
                <Category_section title="Categorias"/>
                <Novidade_section/>
            </Market>
            
            <Fade direction={'right'} triggerOnce={true}>
                <Footer_section/>
            </Fade>

        </Container>
    )
} 
