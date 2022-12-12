import styled from "styled-components";

export const BenefitsContainer = styled.section`
        ul{
            display: flex;
            flex-direction: row;

            margin-top: 4rem;

            li{
                display: flex;
                flex-direction: row;

                width: 100%;

                h3{
                    font-size: 1.8rem;
                    font-weight: 600;
                }
                p{
                    font-size: 1.5rem;
                }
                div{
                    margin-left: 2rem;
                }
            }

            img{
                padding: 1rem;
                border-radius: 50%;

                background-color: #B3BAC530;

                height: 5rem;
                width: 5rem;
            }

            /* Onde esse estilo tá indo? */
            button{
                font-weight: 600;
                
                margin-top: 2rem;
            }
        }

        @media screen and (max-width: 768px) {
            align-self: center;

            h2 {
                text-align: center;
            }

            ul {
                align-items: center;
                flex-direction: column;
                row-gap: 1rem;
            }
        }
`