import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;

    margin-top: 3rem;
    .productheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
    button{
            color: var(--color-primary);
            margin-left: 1.5rem;
    }

    h2{
        font-weight: 600;
        font-size: 25px;
        line-height: 38px;
        letter-spacing: 0.14px;
    }

    .categoryDivCol{
        display: flex;
        flex-direction: column;
    }
    .categoryDivRow{
        display: flex;
        flex-direction: row;
        margin-top: 4rem;
    }
`