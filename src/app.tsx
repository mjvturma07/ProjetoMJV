import Home from "./pages/home";
import  GlobalStyle  from "./styles/globalstyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesMain from "./routes";

export default function App(){
    return(

        <BrowserRouter>

            <GlobalStyle />

            <RoutesMain/>
            
        </BrowserRouter>
        
    )
}
