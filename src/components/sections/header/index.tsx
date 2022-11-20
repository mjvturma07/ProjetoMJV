import Login from "../../login";
import { Header } from "./style";

export default function Header_section(){
    return(
        <Header>
                <nav>
                    <img width={"200px"} height={"60px"} src="/logo.svg" alt="logo shop" />
                    <li>
                        <button>Categorias</button>
                        <button>Shop</button>
                        <button>Contato</button>
                    </li>
                </nav>
                <Login/>
        </Header>
    )
}