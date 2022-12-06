import styled from "styled-components";

export const SearchContainer = styled.section`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin-bottom: 5rem;

        main{
                display: flex;
                justify-content: center;
                align-items: center;

                flex-direction: column;
                gap: 1.4rem;

                margin-right: 7rem;
                margin-left:25rem;
                h2{
                        color: var(--color-primary);
                        font-weight: bold;
                        font-size: 3rem;
                }

                h3{
                        font-weight: bold;    
                }

                p{
                        display: flex;
                        align-items: center;
                        margin-inline: 1rem;
                        color: #64AD5E;
                        font-weight: 800;
                }

                .number{
                        font-size: 3rem;
                        font-weight: bold;
                        color: var(--color-primary);
                        text-align:center;
                        margin-right: .5rem;
                }
        }

        #papai{
                filter: drop-shadow(5px 5px 5px);
        }

        section{
                display: flex;
                justify-content: center;
                align-items: center;

                flex-direction: row;
                gap: 1.4rem;  
        }
`