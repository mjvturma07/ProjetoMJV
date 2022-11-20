import styled from "styled-components";

interface ContainerProps{
  open: boolean
}

export const Container = styled.div<ContainerProps>`
      display: flex;
 
      flex-direction: column;

      height: ${(props) => props.open ? 40 : 35 }rem;
      width: 30rem;

      border-radius: 8px;

      background-color: #2E2E2E06;
      padding: .5rem;

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      transition: .4s ease-out;
      animation: fadeIn .5s;
      cursor: pointer;

      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      } 

      :active{
        box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      img{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        height: 19.1rem;
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
        z-index: 10;

        animation: fadeIn 1s;
      }
`