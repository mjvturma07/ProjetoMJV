import Login from "../../login";
import { Header } from "./style";
import { FiChevronDown } from "react-icons/fi";

export default function Header_section(){
    return(
        <Header>

                <nav>
                    <img loading="lazy" width={"200px"} height={"60px"} src="/logo.svg" alt="logo shop" />
                    <ul>
                        <li>
                            <button>Categorias</button>
                            <FiChevronDown id="downarrow"/>
                        </li>

                        <li>
                            <button>Shop</button>
                        </li>

                        <li>
                            <button>Contato</button>
                        </li>
                    </ul>
                </nav>

                <Login/>

        </Header>
    )
}