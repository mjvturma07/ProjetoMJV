import styled from "styled-components";

export const Container = styled.div`
    height: 48px;
    position: relative;
    display: flex;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 0 15px;

    background-color: rgba(155, 155, 155, 0.1);

    color: var(--color-text-in-primary);
    

    :focus-within {
        border-color: var(--color-secondary);
    } 

    input {
        width: 100%;
        height: 100%;
        background: none;

        padding: 5px;
        border: none;
        
        color: var(--color-text-in-primary);
    }

    label {
        display: flex;
        align-items: center;
        height: 100%;

        position: absolute;
        top: 0;
        left: 12px;

        font-size: 1.5rem;

        transition: top 0.5s, left 0.3s ease-out;
        color: #8D8E90;
    }

    /* input:focus + label, input:not(:placeholder-shown) + label {  */
    input:is(:focus, :not(:placeholder-shown)) + label {
        top: -12px;
        left: 10px;

        height: fit-content;

        padding: 3px 10px;
        border-radius: 14px;

        color: var(--color-text-in-primary);
        font-size: 1.4rem;
        font-weight:bold;
    }

    input:focus ~ svg {
        color: var(--color-primary);
    }

    svg {
        width: 18px;
        height: 18px;
    }

    & + & {
        margin-top: 32px;
    }

`