import { Container } from "./styles";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Footer_section(){
    return(
        <Container>
            <section className="logoeicons">
                <img width={300} height={90} loading="lazy" className="logoFooter" src="/logo_footer.svg" alt="logo aquiexpress" />
                <div className="socialicons">
                    <FiFacebook/>
                    <FiTwitter/>
                    <FiInstagram/>
                    <FiYoutube/>
                    <FiGithub/>
                </div>
            </section>

            <section className="text">
                <p>
                    AquiExpress® é uma marca registrada de AQUIEXPRESS COMÉRCIO ELETRÔNICO S/A | 
                    CNPJ: 01.234.567/0001-89 Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional 
                    podem ser alterados sem prévio aviso. O AquiExpress! não é responsável por erros descritivos. 
                    As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o 
                    fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL. 
                </p>
            </section>
        </Container>
    )
}