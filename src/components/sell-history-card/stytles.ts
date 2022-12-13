import styled from "styled-components";

export const Container = styled.div`
    text-align: left;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem;
    border-radius: 5px;
    position: relative;
    margin-bottom: 1rem;
    width: 30rem;
    .green{
        color: var(--color-success);
        font-weight: bold;
    }
    
    .bold{
        font-weight: bold;
        color: var(--color-text);
    }

    .shoppingtag{
        position: absolute;
        top: 10%;
        right: 5%;
        font-size: 2rem;
    }

    .calendartag{
        position: absolute;
        bottom: 15%;
        right: 5%;
        font-size: 1.8rem;
    }
    :hover{
        transform: scale(1.05);
    }

    & + &{
        margin-left: 1rem;
    } 
`