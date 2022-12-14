import Input from "../input";
import { Container } from "./style";
import  { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

interface userData{
    id:number,
    email: string,
    name:string,
}

export default function Login(){

    const [loginFailed , setLoginFailed] = useState(false)
    const [loginSuces , setloginSucess] = useState(false)
    const [closed, setClosed] = useState("LoginScreenClosed")
    const [authToken, setAuthToken] = useState('')
    const [userData, setUserData] = useState<userData>()

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
            body: JSON.stringify(data)})
            .then(res => { return (
                res.status === 201 ? loginSucess() : setLoginFailed(true),
                res.json()
            )
            }).then(res => {
                sessionStorage.setItem("admintoken", res.access_token);
                setAuthToken(res.access_token)
            })
        }

    useEffect(()=>{

        async function getUserData(){

            await fetch('https://api.escuelajs.co/api/v1/auth/profile', {

                method: 'GET',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`},
                })
                .then(res => res.json())
                .then(res => setUserData(res))
                }

                //Verification to not getdata withoud token aplication on build

                if (authToken != ''){
                    getUserData()
                }

                let tokencookie = sessionStorage.getItem("admintoken")

                if(tokencookie){
                    setAuthToken(tokencookie)
                    setloginSucess(true)
                }

        },[authToken])
            


    function loginSucess(){
        setloginSucess(true)
        setTimeout(()=>{closeLoginScreen()}, 1000)
    }

    function closeLoginScreen(){
        setClosed("LoginScreenClosed")
    }

    function openLoginScreen(){
        if (loginSuces){
            setloginSucess(false)
            setUserData(undefined)
            sessionStorage.removeItem("admintoken");
            window.location.pathname = "/"
        } else { 
            setClosed("LoginScreenOpen")
        }
    }
    
    return(
        <Container>
            <Slide className="loggedInfo" direction="up" triggerOnce duration={400}>
                {userData?.name === "Admin" ? <Link to={`/admin`}>Acessar Painel</Link> : ''}
                {userData?.name != undefined ? <p id="welcome">Bem-vindo(a), {userData.name}.</p>: ''}
            </Slide>
        
            <button onClick={openLoginScreen} id="login">{loginSuces ? 'Sair' : 'Entrar'}</button>

            <section id="formdiv">
                <form id= {closed} onSubmit={(event) => tryLogin(event)}>

                    <FiX id="closebutton" onClick={closeLoginScreen} />
                    
                    <fieldset>
                        <legend> Entrar <span className="tracovermelho"></span> </legend>
                            <Input
                                id='emails'
                                name='email'
                                label='Insira seu e-mail'
                                type='email'
                                value="admin@mail.com"
                            />
                            <Input
                                id='password'
                                name='password'
                                label='Senha'
                                type='password'
                                value="admin123"
                            />
                                    
                            { loginFailed && <h2 id="loginfailed">Usu??rio ou senha inv??lidos</h2>}
                            { loginSuces && <h2 id="loginsucess">Logado com sucesso</h2>}

                            <button type="submit" id="loginbut">Iniciar sess??o</button>
                    </fieldset>
                </form>
            </section>
        </Container>
    )
}