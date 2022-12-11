import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    z-index: 2000;
    bottom: 5%;
    right: 5%;

    background-color: var(--color-primary);
    border-radius:50%;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 1px 1px grey;
    :hover{
        transform: scale(1.05);
    }
    .arrow{
        font-size: 2.8rem;
    }
`