import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    min-height: 100vh;
    height: 100%;
    max-width: 100vw;

    color: var(--color-text);
`

export const Market = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;
    width: 90vw;
    max-width: 1600px;

    padding: 7rem 0;

    .timerdiv{
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

