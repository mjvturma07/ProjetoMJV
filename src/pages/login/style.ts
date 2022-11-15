import styled, { keyframes } from "styled-components"
import { flipInX } from 'react-animations';


// Login Card Animation Keyframe
const flipAnimation = keyframes`${flipInX}`;

export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.2);

        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        

        fieldset{
            padding: 2rem;
            border: none;
        }

        form{
            background: var(--color-text);
            border-radius: .5rem;

            border: 1px solid rgba(255, 255, 255, 0.11);

            animation: 1s ${flipAnimation};

            padding: 2rem;
            width: 40rem;
            margin-bottom: 4rem;
            margin-left: 2rem;

            position: relative;
        }

        legend{
            display: flex;
            flex-direction: column;
            align-items: center;

            color: var(--color-text-in-primary);
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
            
            border: none;
            color: var(--color-text);
            font-weight:bold;
            letter-spacing: .1rem;

            background: linear-gradient(89.91deg, #F21414 -33.43%, #FF4E4E 194.53%);
            border-radius: 8px;

            height: 4.8rem;
            width: 100%;
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

      
        #closebutton{
            position: absolute;
            top: 5%;
            right: 5%;

            color: #5D6670;

            width: 1.6rem;
            height: 1.6rem;

            cursor: pointer;
        }
`