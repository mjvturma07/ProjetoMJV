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
`