import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 4rem;

    h1{
        text-align: center;
    }
`

export const Main = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    row-gap: 4rem;

    width: 90vw;
    max-width: 1600px;

    #chartdiv{
        h2{
            text-align: center;
        }

        section{
            height: 35rem;
            width: 47rem;
        }
    }

    .salesAmount{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;
        margin-left: 1rem;
        width: 100%;
    }

    #totalvendas{
        width: 40rem;
        h2{
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 425px) {
        #chartdiv {
            section {
                height: 29rem;
                width: 40rem;
            }
        }
    }
`