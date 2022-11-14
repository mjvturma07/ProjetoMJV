import styled from "styled-components";

export const Container = styled.div`
    height: 4.8rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color:  var(--color-secondary);
    
    border-radius: 6px;

    cursor: pointer;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: transparent;
        border: none;
        color: var(--color-text-in-primary);
        font-weight:bold;
        letter-spacing: .1rem;
    }

`