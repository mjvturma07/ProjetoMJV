import styled,{keyframes} from "styled-components";
import { fadeInRight } from 'react-animations';

const toRight = keyframes`${fadeInRight}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 35rem;
  width: 30rem;

  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  
  background-color: #2E2E2E06;
  padding: 1rem;

  transition: .4s ease-out;
  animation: .5s  ${toRight};
  cursor: pointer;

  :hover{
    transform: scale(1.05);
    height: 50rem;
  }

  @keyframes fadein{
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  :active{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  img{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 20.85rem;
    width: 100%;
  }

  .text{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    padding: 1rem;

      .category{
        font-size: 1.2rem;
        color: #959EAD;
        margin-top: .7rem;
        margin-bottom: .5rem;
      }
    
      .title{
        font-size: 1.5rem;
        color: #1B1D21;
        line-height: 1.7rem;
        margin-bottom: 1.5rem;
      }
      
      h4{
        font-weight: 600;
        color: #008000;
      }

      p{
        font-size: 1.4rem;
        font-weight: 200;
        color: black;
        margin-top: 1rem;
      }
    
      .comprar{
        align-self: center;
        
        font-size: 14px;

        margin-top: 1rem;
        padding: 1rem;
      
        color: var(--color-text-in-primary);
        background-color: var(--color-primary);
    
        animation: fadein 1s;
        border-radius: 4px;
      }
    }
`