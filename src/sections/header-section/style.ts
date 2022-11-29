import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 9rem;

    color: var(--color-text);
    
    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a{
            text-decoration: none;
            color: var(--color-text);
        }
        
        img{
            margin-bottom: .3rem;
            margin-right: 5rem;
        }

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;

            list-style: none;

            font-weight: 400;
            font-size: 16px;
            line-height: 28px;

            gap: 2rem;

            margin-left: 2rem;
            li{
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }

        #downarrow{
            cursor: pointer;
        }
    }
`