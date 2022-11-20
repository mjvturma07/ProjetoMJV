import Login from "../../login";
import { Header } from "./style";

export default function Header_section(){
    return(
        <Header>
                <nav>
                    <img src="/logo.svg" alt="logo shop" />
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