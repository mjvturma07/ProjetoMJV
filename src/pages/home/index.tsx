import { Fade } from "react-awesome-reveal";
import { Container, Market } from "./style"
import Main_section from "../../sections/main-section"
import Benefits_section from "../../sections/benefits-section"
import Destaque_section from "../../sections/destaque-section"
import Novidade_section from "../../sections/novidade-section"
import Timer_section from "../../sections/timer-section"
import Header_section from "../../sections/header-section"
import Category_section from "../../sections/category-section"
import Footer_section from "../../sections/footer-section";
import Back_to_top from "../../components/back-to-top";
import { useEffect, useState } from "react";

export default function Home(){

    const[loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{setLoaded(true)},500) // not render all page on first load, because user hasnt reached it yet
    },[])


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

                { loaded && <>
                    <Destaque_section/>
                    <Category_section title="Categorias"/>
                    <Novidade_section/>
                </>}
            </Market>

            { loaded && 
            <>
                <Back_to_top/>
                <Footer_section/>
            </>}

        </Container>
    )
} 
