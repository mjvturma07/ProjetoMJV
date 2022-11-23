import { Container, Market } from "./style"
import Main_section from "../../components/sections/main-section"
import Benefits_section from "../../components/sections/benefits-section"
import Destaque_section from "../../components/sections/destaque-section"
import Novidade_section from "../../components/sections/novidade-section"
import Timer_section from "../../components/sections/timer-section"
import Header_section from "../../components/sections/header-section"
import Category_section from "../../components/sections/category-section"
import { Fade } from "react-awesome-reveal";

export default function Home(){

    return(
            <Container> 

                <Header_section/>
                
                <Fade direction={'left'} triggerOnce={true} className="timerdiv">
                    <Main_section/>
                </Fade>

                <Market>

                    <Fade direction={'down'} triggerOnce={true} className="timerdiv">
                        <Timer_section/>
                    </Fade>
                       
                    <Fade direction={'down'} triggerOnce={true}>
                        <Benefits_section/>
                    </Fade>


                    <Destaque_section/>
                    <Category_section/>
                    <Novidade_section/>
                    
                </Market>

            </Container>
    )
} 
