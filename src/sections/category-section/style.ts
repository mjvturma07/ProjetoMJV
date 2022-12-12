import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    width: 100%;

    /* Trocar esse margin por row-gap no container maior */
    margin-top: 4rem;

    .productheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    /* Onde esse buton tá indo? */
    button{
            color: var(--color-primary);
            margin-left: 1.5rem;
    }

    h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 38px;
        letter-spacing: 0.14px;
    }


    .categoryDiv{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 4rem;
    }

    @media screen and (max-width: 425px) {
        .categoryDiv {
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
        }
    }
`