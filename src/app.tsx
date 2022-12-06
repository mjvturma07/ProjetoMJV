import { BrowserRouter } from "react-router-dom";

import  GlobalStyle  from "./styles/globalstyle";
import RoutesMain from "./routes";

export default function App(){
    return(

        <BrowserRouter>
            <GlobalStyle />
            <RoutesMain/>       
        </BrowserRouter>
        
    )
}
