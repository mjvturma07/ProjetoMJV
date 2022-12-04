import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 15rem;
    height: 100%;
    position: relative;
    z-index: 1000;
    .list{
        position: absolute;
        z-index: 1000;
        bottom: -1150%;
        right: 10%;
        background-color: var(--color-text-in-primary);

        display: flex;
        justify-content: center;
        flex-direction: column;
        border-bottom: 1px solid grey;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    a{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        position: relative;
        width: 100%;
        z-index: 1000;
        padding: .5rem 3rem;
        text-align: center;
    }

    a:hover{
        background-color: var(--color-tertiary);
        color: white;
    }

    #downarrow{
        margin-bottom: -.4rem;
        font-size: 2rem;
    }
    position: relative;
    z-index: 1000;
`