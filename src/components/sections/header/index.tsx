import Login from "../../login";
import { Header } from "./style";

export default function Header_section(){
    return(
        <Header>
                <nav>
                    <img width={"200px"} height={"60px"} src="/logo.svg" alt="logo shop" />
                    <ul>
                        <li><button>Categorias</button></li>
                        <li><button>Shop</button></li>
                        <li><button>Contato</button></li>
                    </ul>
                </nav>
                <Login/>
        </Header>
    )
}