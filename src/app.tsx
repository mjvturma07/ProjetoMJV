import Home from "./pages/home";
import Login from "./pages/login";
import  GlobalStyle  from "./styles/globalstyle";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                
                
                <Route index element={<Home/>}/>
                {/* {/* <Route index element={<Home />} /> */}
                {/* <Route path="/home" element={<Home/>} /> */}
               
            </Routes>
        </BrowserRouter>
        
    )
}
