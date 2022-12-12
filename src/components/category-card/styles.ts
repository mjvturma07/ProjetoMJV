import styled from "styled-components";

export const Container = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 15px;
    
    padding: 1.5rem;

    background-color: #2E2E2E06;
    color: var(--color-text);

    :hover{
        transform: scale(1.05);
        color: var(--color-primary);
    }


    img{
        border-radius: 10px;
    }

    header  {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 120px;

        h2{
            font-size: 1rem;
            font-weight: 400;
        }
    
        h3{
            bottom: 14%;
            font-weight: 600;
        }
    }

    @media screen and (max-width: 425px) {
        width: 80vw;
    }
`