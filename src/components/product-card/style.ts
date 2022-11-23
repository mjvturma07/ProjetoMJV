import styled,{keyframes} from "styled-components";
import { fadeInRight,fadeInLeft } from 'react-animations';

const toRight = keyframes`${fadeInRight}`;

interface ContainerProps{
  open: boolean
  motion?: string,
}

export const Container = styled.div<ContainerProps>`
      display: flex;
      flex-direction: column;

      height: ${(props) => props.open ? 40 : 35 }rem;
      width: 30rem;

      border-radius: 8px;
      border: 1px solid var(--color-warning);

      background-color: #2E2E2E06;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      transition: .4s ease-out;
      animation: .5s  ${toRight};
      cursor: pointer;

      :hover{
        transform: scale(1.05);
      }

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      :active{
        box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      img{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        height: 18.25rem;
        width: 100%;
      }

      .category{
        font-size: 1.2rem;
        color: #959EAD;

        margin-top: .7rem;
        margin-bottom: 1.5rem;
      }

      .title{
        font-size: 1.6rem;
        color: #1B1D21;
        line-height: 1.4rem;

        margin-bottom: 1.5rem;
      }
      
      h4{
        font-weight: 600;
      }

      .text{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        text-align: left;

        padding: 1rem;
      }



      .comprar{
        margin: 0 auto;

        width: 20rem;
        height: 4rem;
        
        color: var(--color-text-in-primary);
        background-color: var(--color-primary);

        margin-top: 2rem;

        position: relative;
        z-index: 100;

        animation: fadein 1s;
        border-radius: 4px;
      }
`