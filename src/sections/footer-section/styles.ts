import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 5rem;
    background-color: var(--color-primary);
    color: var(--color-text-in-primary);

    width: 100%;

    .logoeicons{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10rem;
    }

    .socialicons{
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 4rem;
        
        ul{
            flex-direction:column;
        }

        .logoeicons{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        }

        .socialicons{
            display: flex;
            gap: 2rem;
            margin-top: 0;
        }

        .text{
            text-align: center;
            margin-top:2rem;
        }
    }
`