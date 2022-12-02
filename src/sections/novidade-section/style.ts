import styled from "styled-components";

export const NovidadeContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;
    h2{
        font-weight: 600;
        font-size: 25px;
        line-height: 38px;
        letter-spacing: 0.14px;
    }
    
    .products{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        gap: 3rem;

        margin-top: 2rem;
    }

    .productheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        button{
            color: var(--color-primary);
            font-weight: bold;
            margin-left: 1.5rem;
        }

        .pageArrow{
            background-color: #B3BAC532;
            padding: .8rem 1.5rem;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`