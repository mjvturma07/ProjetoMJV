import styled, { keyframes } from "styled-components";
import { flash } from 'react-animations';

const rotate = keyframes`${flash}`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 52rem;
    
    padding-inline: 8rem;

    background: radial-gradient(118.65% 107.05% at 75.38% 59.24%, #F54646 0%, #980C0C 62.86%);

    color: var(--color-text-in-primary);
    overflow: hidden;

    #maintext{
        h1{
            font-weight: 500;
            font-size: 4rem;
            line-height: 62px;
            letter-spacing: 0.125px;
            animation: 1s ${rotate};
            animation-delay:1s;
        }
        
        p{
            font-style: normal;
            font-weight: 200;
            font-size: 1.6rem;
        }

        button{
            width: 20rem;
            height: 4.5rem;
            color: var(--color-primary);

            margin-top: 3rem;
            border-radius: 4px;

            box-shadow: 1px 1px 1px var(--color-primary);
            background-color: var(--color-text-in-primary);
        }

        button:active{
            box-shadow: inset 1px 1px 1px var(--color-primary);
        }
    }

    #mockup{
        height: 56.9rem;
        width: 54.9rem;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;

        #mockup{
        display: none;
        }
    }

    @media screen and (max-width: 475px) {
        height: 35rem;
    }
`