import styled from "styled-components";

export const CarouselContainer = styled.section`
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

    .productheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .pageNumber {
            width: 30px;

            h3 {
                text-align: center;
            }
        }

        button{
            color: var(--color-primary);
        }

        .pageArrow{
            background-color: #B3BAC512;
            padding: 1rem 1.5rem;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }

        
    .products{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        column-gap: 5%;
        row-gap: 5rem;

        margin-top: 2rem;
    }

    @media screen and (max-width: 1600px) {
        .products{
            a > div{
                column-gap: 0;
                width: 19vw;
                height: fit-content;
            
                img{
                    height: auto;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .products{
            a > div{
                column-gap: 0;
                width: 42.5vw;
                height: fit-content;
            
                img{
                    height: auto;
                }
            }
        }
    }
`