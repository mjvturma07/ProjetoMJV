import { Container } from "./stytles";
import { FiShoppingCart,FiCalendar } from "react-icons/fi";

interface sellHistoryCardProps{
    productName?: string,
    productPrice: string,
    productSellDate: string,
}

export default function SellHistoryCard({productName,productPrice,productSellDate}:sellHistoryCardProps){
    return(
        <Container>
            <ul>
                <li> <span className="green">{productPrice}</span></li>
                <li><span className="bold">{productName}</span></li>
                <li> <span>{productSellDate}</span></li>
            </ul>

            <FiShoppingCart aria-label="shopping tag" className="shoppingtag" color="green"/>
            <FiCalendar aria-label="calendar tag" className="calendartag"/>
        </Container>
    )
}