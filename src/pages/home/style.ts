import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    min-height: 100vh;
    height: 100%;
    max-width: 100vw;

    color: var(--color-text);
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 7rem;

    color: var(--color-text);
    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img{
            margin-bottom: 1rem;
        }

        li{
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
           
            button{
                background: none;
                border: none;
            }
        }
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 42rem;
    padding-inline: 8rem;

    background: radial-gradient(118.65% 107.05% at 75.38% 59.24%, #F54646 0%, #980C0C 62.86%);

    color: var(--color-text-in-primary);

    #mockup{
        height: 43rem;
        width: 43rem;
    }

    #maintext{
        h1{
            font-weight: 500;
            font-size: 4rem;
            line-height: 62px;
            letter-spacing: 0.125px;
        }
        p{
            font-style: normal;
            font-weight: 200;
            font-size: 1.6rem;
            line-height: 36px;
        }

        button{
            width: 20rem;
            height: 4.5rem;
            color: var(--color-primary);

            margin-top: 3rem;
            border-radius: 4px;

            border: none;

            box-shadow: 1px 1px 1px var(--color-primary);
        }

        button:active{
            box-shadow: inset 1px 1px 1px var(--color-primary);
        }
    }
`

export const Market = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 60rem;
    width: 100vw;

    padding: 7rem 10rem;

    h2{
        font-weight: 600;
        font-size: 25px;
        line-height: 38px;
        letter-spacing: 0.14px;
    }

    #search{
        width: 50rem;
        margin-top: 3rem;
        margin-bottom: 5rem;
    }

    #benefitsection{
        
        li{
            display: flex;
            flex-direction: row;

            margin-top: 4rem;

            ul{
                display: flex;
                flex-direction: row;

                width: 100%;
                h3{
                    font-size: 1.8rem;
                    font-weight: 600;
                }
                p{
                    font-size: 1.5rem;
                }
                div{
                    margin-left: 2rem;
                }
            }
            img{
                padding: 1rem;
                border-radius: 50%;

                background-color: #B3BAC530;

                height: 5rem;
                width: 5rem;
            }
            button{
                border: none;
                background: none;

                font-weight: 600;
                
                margin-top: 2rem;
            }
        }

    }
`

