import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    width: 90vw;
    max-width: 1600px;
    margin: 2rem auto 6rem;

    .row{
        display: flex;
        column-gap: 4rem;

        #productimage{
            width: 30%;
            height: 100%;
            align-self: center;
        }

        #productdata{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
    
            h1{
                font-size: 2.5rem;
                font-weight: bold;
            }

            h2{
                color: var(--color-primary);
                font-weight: bold;
            }

            .comprar{
                width: 20rem;
                height: 4rem;
                color: var(--color-text-in-primary);
                background-color: var(--color-primary);
                z-index: 100;
                animation: fadein 1s;
                border-radius: 4px;
            }
        }
    }

    @media screen and (max-width: 1366px) {
        .row > #productdata{
                row-gap: 2rem;
        }
    }

    @media screen and (max-width: 1024px) {

        .row{
            flex-direction: column;
            row-gap: 4rem;

            #productimage{
                width: 50%;
            }

            #productdata{
                align-items: center;

                h3{
                    text-align: center;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .row > #productimage{
            width: 70%;
        }
    }
`