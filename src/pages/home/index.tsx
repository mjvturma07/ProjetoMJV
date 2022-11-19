import Input from "../../components/input"
import Login from "../login"
import { Container, Header, Main, Market } from "./style"

export default function Home(){
    return(
        <Container>

            <Header>
                <nav>
                    <img src="/logo.svg" alt="" />
                    <li>
                        <button>Categorias</button>
                        <button>Shop</button>
                        <button>Contato</button>
                    </li>
                </nav>
                <Login/>
            </Header>

            <Main>
                <section  id="maintext">
                    <h1>Sleek Metal Fish</h1>
                    <p>Apresentando o design original de ondulação inspirado nos trens-bala japoneses.</p>
                    <button>Comprar agora</button>
                </section>

                <section>
                    <img id="mockup" src="/mockup.webp" alt="mão segurando celular" />
                </section>
            </Main>

            <Market>
                <section id="searchsection">
                    <h2>Busque aqui seu produto</h2>
                    <Input
                    id="search"
                    label="Pesquisar"
                    name="Pesquisar"
                    type="text"
                    />
                </section>

                <section id="benefitsection">
                    <h2>Conheça as vantagens de comprar no AquiExpress</h2>
                    <li>
                        <ul>
                            <img src="/truck.png" alt="" />
                            <div>
                                <h3>Frete grátis</h3>
                                <p>Para pedidos acima de R$150 em produtos selecionados</p>
                                <button>Saiba mais</button>
                            </div>
                        </ul>

                        <ul>
                            <img src="/money.svg" alt="" />
                            <div>
                                <h3>Pagamento seguro</h3>
                                <p>Aceitamos todos os cartões e pagamentos digitais</p>
                                <button>Saiba mais</button>
                            </div>
                        </ul>

                        <ul>
                           <img src="headphone.png" alt="" />
                           <div>
                                <h3>Suporte online</h3>
                                <p>Estamos online 24/7 para te ajudar</p>
                                <button>Saiba mais</button>
                            </div>
                        </ul>
                    </li>
                </section>
            </Market>
            
        </Container>
    )
} 
