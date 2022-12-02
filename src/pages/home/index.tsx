import { Fade } from "react-awesome-reveal";
import { Container, Market } from "./style"
import Main_section from "../../sections/main-section"
import Benefits_section from "../../sections/chrismas-section"
import Destaque_section from "../../sections/destaque-section"
import Novidade_section from "../../sections/novidade-section"
import Timer_section from "../../sections/timer-section"
import Header_section from "../../sections/header-section"
import Category_section from "../../sections/category-section"
import Footer_section from "../../sections/footer-section";

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
            
            <Footer_section/>
        </Container>
    )
} 
