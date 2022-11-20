import Home from "./pages/home";
import  GlobalStyle  from "./styles/globalstyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle />
            <Routes>

                <Route index element={<Home/>}/>
                {/* <Route path="/home" element={<Home/>} /> */}
               
            </Routes>
        </BrowserRouter>
        
    )
}
