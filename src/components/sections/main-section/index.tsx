import Login from "../../login";
import { Main } from "./style";

export default function Main_section(){
    return(
        <Main>

                <section  id="maintext">
                    <h1>AquiExpress</h1>
                    <p>Os melhores produtos da sua região.<br/> Estamos aqui, sempre do seu lado.</p>
                    <a href="#benefit"><button>Ver produtos</button></a>
                </section>

                <section>
                    <img loading="eager" id="mockup" src="/mockup.webp" alt="mão segurando celular" />
                </section>
                
        </Main>
    )
}