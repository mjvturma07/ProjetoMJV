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
                h2{
                        color: var(--color-primary);
                        font-weight: bold;
                        font-size: 3rem;
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