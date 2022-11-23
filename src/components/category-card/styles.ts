import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: row;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 15px;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--color-warning);
    background-color: #2E2E2E06;

    :hover{
        transform: scale(1.05);
    }


    img{
        border-radius: 10px;
        margin-right:2rem;
        margin-left:15rem;
    }

    margin-right:4rem;

    header h2{
        font-size: 2rem;
        position: absolute;
        font-weight: 400;
    }
    h3{
        position: absolute;
        bottom: 14%;
        font-weight: 600;
        color: var(--color-primary);
    }
`