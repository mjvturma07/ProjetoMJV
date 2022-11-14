import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { Container } from "./style";

import felicitalogo from "../../assets/felicitalogo.png"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        async function getUsersData(){
            await fetch('https://api.escuelajs.co/api/v1/users')
            .then(res=>res.json())
            .then(json=>console.log(json))
        }

        async function tryLogin(){

            var data = {
               'email': 'admin@mail.com',
               'password': 'admin123'
            }

            await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then(res => res.json())
                .then(res => console.log(res));
        }

    },[])

    return(
        <Container>
            <img src={felicitalogo} alt="" />
            <form>
                <fieldset>
                    <legend>Faça seu login</legend>
                                <Input 
                                    id='email' 
                                    name='email' 
                                    label='E-mail:' 
                                    type='email'  
                                />

                                <Input 
                                    id='password' 
                                    name='password' 
                                    label='Senha:' 
                                    type='password'  
                                /> 

                                <Button
                                text="submit"
                                submit= {true}
                                id="loginbut"
                                />
                </fieldset>
            </form>
        </Container>
    )
}