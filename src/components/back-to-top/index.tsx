import { Container } from "./styles";
import { FiArrowUp } from 'react-icons/fi';
import { useState } from "react";

export default function Back_to_top(){
    function goToTop(){
        window.scrollTo(0,0);
    }
    return(
        <Container onClick={goToTop}>
            <FiArrowUp className="arrow" color="white"/>
        </Container>
    )
}