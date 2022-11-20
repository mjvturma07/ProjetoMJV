import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 52rem;
    padding-inline: 8rem;

    background: radial-gradient(118.65% 107.05% at 75.38% 59.24%, #F54646 0%, #980C0C 62.86%);

    color: var(--color-text-in-primary);

    #mockup{
        height: 53rem;
        width: 54.9rem;
    }

    #maintext{
        h1{
            font-weight: 500;
            font-size: 4rem;
            line-height: 62px;
            letter-spacing: 0.125px;
        }
        p{
            font-style: normal;
            font-weight: 200;
            font-size: 1.6rem;
            line-height: 36px;
        }

        button{
            width: 20rem;
            height: 4.5rem;
            color: var(--color-primary);

            margin-top: 3rem;
            border-radius: 4px;

            box-shadow: 1px 1px 1px var(--color-primary);
            background-color: var(--color-text-in-primary);
        }

        button:active{
            box-shadow: inset 1px 1px 1px var(--color-primary);
        }
    }
`