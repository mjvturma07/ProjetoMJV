import Input from "../../input";
import { SearchContainer } from "./style";

export default function Search_section(){
    return(
        <SearchContainer>

                    <h2>Busque aqui seu produto</h2>

                    <Input
                    id="search"
                    label="Pesquisar"
                    name="Pesquisar"
                    type="text"
                    />
                    
        </SearchContainer>
    )
}