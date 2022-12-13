import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 9rem;
    color: var(--color-text);
    position: relative;
    z-index: 120;
    
    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a{
            text-decoration: none;
            color: var(--color-text);
        }
        
        img{
            margin-bottom: .3rem;
            margin-right: 5rem;
        }

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;

            list-style: none;

            font-weight: 400;
            font-size: 16px;
            line-height: 28px;

            gap: 2rem;

            margin-left: 2rem;

            li{
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }

    #mobileMenu{
        display: none;
    }

    @media (max-width: 1000px) {
        .logo{
            display: flex;
            margin-left: 7rem;
            width: 15rem;
            height: 8rem;
            margin-right: 0;
        }

        #logoLink{
           display: flex;
           align-items: center;
           justify-content: center;
           margin: 0;
           padding: 0;
           width: 12rem;
           margin-right: 10rem;
           margin-left: -2rem;
        }

        #logo2{
            width: 20rem;
        }

        #mobileMenu{
            display: flex;
        }

        #mobileMenuIcon{
            font-size:3.5rem;
            margin-left:1rem;
        }

        .links{
            display: none;
            flex-direction:column;
        }

        .aparecer{
            display: flex;
            position: fixed;
            height: 100vh;
            width: 100vw;
            right: 50%;
            bottom: 50%;
            transform: translate(50%,50%);
            z-index: 5000;
            background-color: white;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin-top: 2rem;
            li{
                margin-top: 3rem;
            }
        }

        #closeModal{
            font-size: 4rem;
            color: var(--color-primary);
            margin-bottom: 15rem;
            margin-left: 3rem;
            margin-top: 2rem;
            cursor: pointer;
        }

        #menuMob{
            flex-direction: column;
        }
        
        .row{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`