import { ReactNode } from "react";
import {Container} from "./style"

interface inputProps{
    id?: string,
    text: string, 
    children?: ReactNode
    submit?: boolean,
    width?: string,
}

export default function Button({id, text, children, submit}:inputProps){
    return(
        <Container id={id}>
            <button type={submit === true ? "submit" : undefined}>
                {text}
                {children}
            </button>
        </Container>
    )
}