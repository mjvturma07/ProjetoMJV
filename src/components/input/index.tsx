import { ReactNode } from "react";
import {Container} from "./style"

interface inputProps{
    id: string,
    label: string, 
    type: string, 
    name: string, 
    children?: ReactNode,
    value?: string
}

export default function Input({id, label, type, name, children, value}:inputProps){
    return(
        <Container id={id} >

            <input 
                type={type} 
                name={name} 
                placeholder= ' ' 
                aria-label={name}
                defaultValue={value}
            />

            <label htmlFor={id}>{label}</label>

            {children}
            
        </Container>
    )
}