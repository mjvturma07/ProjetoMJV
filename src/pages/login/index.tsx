import Input from "../../components/input";
import { Container } from "./style";

import  { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

export default function Login(){

    const [loginFailed , setLoginFailed] = useState(false)
    const [loginSuces , setloginSucess] = useState(false)
    const [closed, setClosed] = useState("LoginScreenOpen")

    let Navigate = useNavigate()

    async function tryLogin(event:any){
        
        event.preventDefault()
        setLoginFailed(false)
        setloginSucess(false)

        var data = {
           'email': event.target[1].value,
           'password': event.target[2].value
        }

        await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.status === 201 ? loginSucess() : setLoginFailed(true))
    }

    function loginSucess(){
        setloginSucess(true)
        setTimeout(()=>{Navigate("/home")}, 1000)
    }

    function closeLoginScreen(){
        setClosed("LoginScreenClosed")
    }
    
    return(
        <Container id= {closed}>
           
            <form onSubmit={(event) => tryLogin(event)}>
                <FiX id="closebutton" onClick={closeLoginScreen} />
                <fieldset>
                    <legend> Entrar <span className="tracovermelho"></span> </legend>
                    
                                <Input 
                                    id='email' 
                                    name='email' 
                                    label='Insira seu e-mail' 
                                    type='email'
                                />

                                <Input 
                                    id='password' 
                                    name='password' 
                                    label='Senha' 
                                    type='password'  
                                /> 

                                { loginFailed && <h2 id="loginfailed">Usuário ou senha inválidos</h2>}
                                { loginSuces && <h2 id="loginsucess">Logado com sucesso</h2>}

                                <button type="submit" id="loginbut">Iniciar sessão</button>
                </fieldset>
            </form>
        </Container>
    )
}