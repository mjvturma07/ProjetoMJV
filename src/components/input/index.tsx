import { ReactNode } from "react";
import {Container} from "./style"

interface inputProps{
    id: string,
    label: string, 
    type: string, 
    name: string, 
    children?: ReactNode
}

export default function Input({id, label, type, name, children}:inputProps){
    return(
        <Container>
            <input type={type} name={name} id={id} placeholder=' ' />
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}