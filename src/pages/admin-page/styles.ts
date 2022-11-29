import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1{
        text-align: center;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;
    padding: 4rem 5rem;

    #chartdiv{
        height:35rem;
        width: 47rem;
        margin-left:-10rem;
        h2{
            text-align: center;
        }
    }

    width: 100%;
    height: 45rem;

    .divrow{
        display: flex;
        flex-direction: row;
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

`