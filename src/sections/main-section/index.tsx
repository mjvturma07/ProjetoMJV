import { Main } from "./style";

export default function Main_section(){
    return(
        <Main>
                <section  id="maintext">
                    <h1>AquiExpress</h1>
                    <p>Beep beep, chegou!<br/> Estamos aqui, sempre do seu lado.</p>
                    <a href="#benefit"><button>Ver produtos</button></a>
                </section>

                <section>
                    <img loading="lazy" id="mockup" src="/mockup.webp" alt="mão segurando celular" />
                </section>
        </Main>
    )
}