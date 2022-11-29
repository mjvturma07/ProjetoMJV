import styled from "styled-components";

export const Container = styled.div`
    h2{
        text-align: center;
        font-weight: 400;
    }
    h3{
        text-align: center;
        margin-bottom: 0;
        font-weight: bold;
    }
    section{
        height: 30rem;
        width: 35rem;
        text-align: center;
        margin-top: 1rem;
        overflow-y:scroll;
        position: relative;
        padding: 2rem;
        li{
            color: var(--color-text);
        }
    }
`