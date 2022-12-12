import Login from "../../components/login";
import { Header } from "./style";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Dropdown } from "../../components/dropdown";
import { FiAlignJustify,FiX } from "react-icons/fi";
import {useState} from "react"

export default function Header_section(){
    const[isOpenMenuMobile, setIsOpenMenuMobile] = useState("")

    const itemCategorias = [
        {
            name: "Clothes",
            path: "/categorias/1"
        },
        {
            name: "Eletronics",
            path: "/categorias/2"
        },
        {
            name: "Furnitures",
            path: "/categorias/3"
        },
        {
            name: "Shoes",
            path: "/categorias/4"
        },
        {
            name: "Others",
            path: "/categorias/5"
        },
    ]
    return(
        <Header>
            <nav>
                <Link to='/' id="logoLink">
                    <img className="logo" loading="lazy" width={"200px"} height={"60px"} src="/logo-with-text.svg" alt="logo shop" />
                </Link>

                <Slide className={`links ${isOpenMenuMobile}`} cascade duration={500} direction={"right"} triggerOnce>
        
                    <ul>
                        {isOpenMenuMobile === "aparecer" ? 

                        <li id="menuMob">
                            <div className="row">
                                <Link to='/'>
                                    <img id="logo2" className="logo" loading="lazy" width={"200px"} height={"60px"} src="/logo-with-text.svg" alt="logo shop" />
                                </Link>
                                <FiX onClick={()=>{setIsOpenMenuMobile("")}} id="closeModal"/>
                            </div>
                            <Dropdown title="Categorias" items={itemCategorias}/>
                        </li> 
                        
                        : ''

                        }

                        <li>
                            <Link to='/' onClick={()=>{setIsOpenMenuMobile("")}}>
                                Início
                            </Link>
                        </li>

                        <li>
                            <a href="https://wa.me/31991049113" target={"_blank"}><button>Contato</button></a>
                        </li>

                        {isOpenMenuMobile === "" ? <li>
                            <Dropdown title="Categorias" items={itemCategorias}/>
                        </li> : ""}
                        
                    </ul>
                </Slide>
            </nav>

            <Login/>
            <button id="mobileMenu" onClick={()=>{setIsOpenMenuMobile("aparecer")}}><FiAlignJustify id="mobileMenuIcon"/></button>
        </Header>
    )
}