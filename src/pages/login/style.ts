import styled, { keyframes } from "styled-components"
import { flipInX } from 'react-animations';

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
        border-radius: 16px;

        backdrop-filter: blur(10.6px);
        -webkit-backdrop-filter: blur(10.6px);
        border: 1px solid rgba(255, 255, 255, 0.91);
        animation: 1s ${flipAnimation};

        padding: 2rem;

        width: 40rem;
        margin-bottom: 4rem;
        margin-left: 4rem;
        }

        legend{
            color: var(--color-text-in-primary);
        }

        img{
            filter: drop-shadow(1rem 1rem 1rem);
            margin-bottom: 11rem;
            margin-right: 3rem;
        }

        #loginbut{
            margin-top: 2rem;
            
        }
`