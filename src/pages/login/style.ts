import styled, { keyframes } from "styled-components"
import { flipInX } from 'react-animations';


// Login Card Animation Keyframe
const flipAnimation = keyframes`${flipInX}`;

export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        

        fieldset{
            padding: 2rem;
            border: none;
        }

        form{
            background: rgba(255, 255, 255, 0.30);
            border-radius: .5rem;
            backdrop-filter: blur(10.6px);
            -webkit-backdrop-filter: blur(10.6px);
            border: 1px solid rgba(255, 255, 255, 0.11);

            animation: 1s ${flipAnimation};

            padding: 2rem;
            width: 40rem;
            margin-bottom: 4rem;
            margin-left: 2rem;
        }

        legend{
            display: flex;
            align-items: center;

            color: var(--color-text-in-primary);
            font-weight: bold;
            text-align: center;
            letter-spacing:.5rem;

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

            background-color: var(--color-tertiary);

            width: 7rem;
            height:.5rem;
        }
        .tracoazul{
            display: flex;

            background-color: var(--color-secondary);

            width: 7rem;
            height:.5rem;
        }
        .tracolaranja{
            display: flex;

            background-color: var(--color-primary);

            width: 7rem;
            height:.5rem;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            
            border: none;
            color: var(--color-text-in-primary);
            font-weight:bold;
            letter-spacing: .1rem;

            background-color:  var(--color-secondary);
            border-radius: 6px;

            height: 4.8rem;
            width: 15rem;
            margin: 0 auto;
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
`