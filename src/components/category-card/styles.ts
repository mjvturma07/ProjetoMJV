import styled from "styled-components";

export const Container = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    
    padding: 1.5rem;

    background-color: #2E2E2E06;

    :hover{
        transform: scale(1.05);
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
            color: var(--color-primary);
        }
    }

    @media screen and (max-width: 425px) {
        width: 80vw;
    }
`