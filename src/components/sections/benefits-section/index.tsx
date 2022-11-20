import Input from "../../input";
import { BenefitsContainer } from "./style";

export default function Benefits_section(){
    return(
        <BenefitsContainer id="benefit">

                    <h2>Conheça as vantagens de comprar no AquiExpress</h2>

                    <ul>
                        <li>
                            <img loading="lazy" src="/truck.png" alt="red truck" />
                            <div>
                                <h3>Frete grátis</h3>
                                <p>Para pedidos acima de R$150 em produtos selecionados</p>
                            </div>
                        </li>

                        <li>
                            <img loading="lazy" src="/money.svg" alt="money pilled" />
                            <div>
                                <h3>Pagamento seguro</h3>
                                <p>Aceitamos todos os cartões e pagamentos digitais</p>
                            </div>
                        </li>

                        <li>
                           <img loading="lazy" src="headphone.png" alt="red headphone" />
                           <div>
                                <h3>Suporte online</h3>
                                <p>Estamos online 24/7 para te ajudar</p>
                            </div>
                        </li>
                    </ul>
                    
        </BenefitsContainer>
    )
}