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

    width: 15vw;
    max-width: 200px;

    :hover{
        transform: scale(1.05);
        color: var(--color-primary);
    }


    img{
        border-radius: 10px;
        width: 150px;
    }

    @media screen and (max-width: 1200px) {
        img{
            width: 100%;
        }
    }

    @media screen and (max-width: 1070px) {
        width: 25vw;
    }

    @media screen and (max-width: 600px) {
        width: 38vw;

        .categoryTitle{
            font-size: 20px;
        }

        h3{
            font-size: 16px;
        }
    }
`