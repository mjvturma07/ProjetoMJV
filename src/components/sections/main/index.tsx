import Login from "../../login";
import { Main } from "./style";

export default function Main_section(){
    return(
        <Main>

                <section  id="maintext">
                    <h1>Sleek Metal Fish</h1>
                    <p>Apresentando o design original de ondulação inspirado nos trens-bala japoneses.</p>
                    <a href="#benefit"><button>Comprar agora</button></a>
                </section>

                <section>
                    <img loading="eager" id="mockup" src="/mockup.webp" alt="mão segurando celular" />
                </section>
                
        </Main>
    )
}