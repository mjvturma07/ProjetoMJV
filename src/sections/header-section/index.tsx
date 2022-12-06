import Login from "../../components/login";
import { Header } from "./style";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Dropdown } from "../../components/dropdown";

export default function Header_section(){
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
                <Link to='/'>
                    <img loading="lazy" width={"200px"} height={"60px"} src="/logo-with-text.svg" alt="logo shop" />
                </Link>

                <Slide cascade duration={500} direction={"right"}>
                    <ul>
                        <li>
                            <Link to='/'>
                                Início
                            </Link>
                        </li>

                        <li>
                            <a href="https://wa.me/31991049113" target={"_blank"}><button>Contato</button></a>
                        </li>

                        <li>
                            <Dropdown title="Categorias" items={itemCategorias}/>
                        </li>
                    </ul>
                </Slide>
            </nav>

            <Login/>
        </Header>
    )
}