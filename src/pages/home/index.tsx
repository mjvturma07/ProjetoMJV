import React ,{ useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Market } from "./style"
import Main_section from "../../sections/main-section"
import Benefits_section from "../../sections/benefits-section"
import Timer_section from "../../sections/timer-section"
import Header_section from "../../sections/header-section"

const Destaque_section = React.lazy(() => import('../../sections/destaque-section'));
const Novidade_section = React.lazy(() => import('../../sections/novidade-section'));
const Category_section = React.lazy(() => import('../../sections/category-section'));
const Footer_section = React.lazy(() => import('../../sections/footer-section'));
const Back_to_top = React.lazy(() => import('../../components/back-to-top'));

// LAZY IMPORT COMPONENTS THAT DO NOT RENDER ON INITIAL RENDER

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
                <Fade direction={'down'} className="timerdiv" triggerOnce>
                    <Timer_section/>
                </Fade>
                    
                <Fade direction={'down'} triggerOnce>
                    <Benefits_section/>
                </Fade>

                { loaded && 

                <>
                    <Destaque_section/>
                    <Category_section title="Categorias"/>
                    <Novidade_section/>
                </>
                
                }
            </Market>

            { loaded && 

                <>
                    <Back_to_top/>
                    <Footer_section/>
                </>

            }

        </Container>
    )
} 
