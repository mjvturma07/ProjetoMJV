import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 110%;
    width: 100vw;
    padding: 3rem 10rem;
`

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    
    .products{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 4rem;
        gap: 3rem;
    }

    .productheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin-bottom: 3rem;

        #category{
            font-weight: bold;
            color: var(--color-primary);
        }

        button{
            color: var(--color-primary);
            margin-left: 1.5rem;
        }

        .pageArrow{
            background-color: #B3BAC512;
            padding: 1rem 1.5rem;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        h2{
            color: var(--color-text);
            font-weight: 400;
        }
    }

    #productimage{
        height: 38.525rem;
        width: 44rem;
    }

    #productdata{
        margin-left: 4rem;
        margin-top: 3rem;
        h1{
            font-size: 2.5rem;
            font-weight: bold;
        }
        h2{
            color: var(--color-primary);
            font-weight: bold;
            margin-top: 2rem;
        }
        h3{
            margin-top: 5rem;
        }
    }

    .row{
        display: flex;
        flex-direction: row;
    }

    .comprar{
        width: 20rem;
        height: 4rem;
        color: var(--color-text-in-primary);
        background-color: var(--color-primary);
        margin-top: 4rem;
        z-index: 100;
        animation: fadein 1s;
        border-radius: 4px;
      }
`