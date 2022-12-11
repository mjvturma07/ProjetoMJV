import styled, { keyframes } from "styled-components"
import { flipInX } from 'react-animations';


// Login Card Animation Keyframe
const flipAnimation = keyframes`${flipInX}`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-text-in-primary);
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    fieldset{
        padding: 2rem;
        border: none;
    }

    form{
        background: white;
        border-radius: .5rem;
        border: 1px solid rgba(255, 255, 255, 0.11);
        padding: 2rem;
        width: 49rem;
        height: 34rem;
        margin-bottom: 4rem;
        animation: .7s ${flipAnimation};
    }

    h2{
        animation: fadeIn .7s;
    }
    // This #formdiv is created because the animation is overriding the 
    //transform props, so i am making the tranlations props on a parent div and the animation on the child

    #formdiv{
        position: absolute;
        transform: translate(50%,-50%);
        top: 350%;
        right: 50%;
        z-index: 100;
    }

    legend{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-text);
        font-weight: bold;
        text-align: center;
        gap: 1rem;
    }

    img{
        filter: drop-shadow(.5rem .5rem .5rem #00000098) ;
        margin-bottom: 8rem;
        margin-right:7rem;
        transform: scale(.85);
    }

    #loginbut{
        margin-top: 2rem;
    }

    .tracovermelho{
        display: flex;
        background-color: var(--color-primary);
        width: 4rem;
        height:.3rem;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-in-primary);
        font-weight:bold;
        letter-spacing: .1rem;
        background: var(--color-primary);
        border-radius: 8px;
        height: 4.7rem;
        width:100%;
        margin: 0 auto;
        box-shadow: 1px 1px 1px var(--color-primary);
        padding: 1rem 2rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0px;
    }

    button:active{
        box-shadow: inset 1px 1px 1px var(--color-primary);
    }

    // Error and Success style

    #loginfailed{
        font-weight: bold;
        color: var(--color-error);
        font-size: 1.6rem;
        text-align: center;
        margin-top: 1rem;
    }

    #loginsucess{
        font-weight: bold;
        color: var(--color-success);
        font-size: 1.6rem;
        text-align: center;
        margin-top: 1rem;
    }

    #closebutton{
        position: absolute;
        top: 5%;
        right: 5%;
        color: #5D6670;
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
    }

    #login{
        display: flex;
        border-radius: 6px;
        height: 4.5rem;
        width: 12rem;
        font-size: 12px;
    }

    p{
        margin-right: 7rem;
        font-weight:bold;
        animation: fadeIn .7s;
    }

    a{
        color: var(--color-text);
        margin-right: 2rem;
        animation: fadeIn .7s;
    }

    @media (max-width: 1000px) {
        #login{
            width: 8rem;
        }
        p{
            font-size: 1.4rem;
        }
        .loggedInfo{
            position: absolute;
            width: 15rem;
            bottom: 0;
            right: 50%;
        }
        #welcome{
            display: none;
        }
        header{
            height: 10rem;
        }
    }
`