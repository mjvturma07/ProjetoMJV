import {  Routes, Route } from "react-router-dom";
import CategoryPage from "../pages/category-page";
import Home from "../pages/home";
import ProductSingle from "../pages/product-single";

export default function RoutesMain(){
    return(
        <Routes>
                <Route index element={<Home/>}/>
                <Route path="/produto/:productId" element={<ProductSingle/>} />
                <Route path="/categorias/:categoryId" element={<CategoryPage/>} />
                {/* <Route path="*" element={<CategoryPage/>} /> */}
        </Routes>
    )
}