import Login from "../../login";
import { Header } from "./style";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

export default function Header_section(){
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
                                    Home
                                </Link>
                            </li>

                            <li>
                                <button>Contato</button>
                            </li>

                            <li>
                                <button>Categorias</button>
                                <FiChevronDown id="downarrow"/>
                            </li>
                        </ul>

                    </Slide>
                </nav>

                <Login/>
        </Header>
    )
}