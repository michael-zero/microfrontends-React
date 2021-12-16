import React from 'react'
import styled from 'styled-components'
import Image from '../assets/maquina.jpg'
import Control from '../assets/control.jpg'

const Home = () => {
    return (
        <>
        <Content>
            <Parallax/>
        </Content>

        <Content>
            <Left>
                <Title>Lorem ipsum dolor sit.</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Button>Saiba mais</Button>
            </Left>
            <Right>
                <Banner>
                    <img src={Image}/>
                </Banner>
            </Right>
        </Content>
        </>
    )
}

const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media(min-width: 992px){
    flex-direction: row;

    }

`

const Banner = styled.div`
    width: 90%;
    img {
        display: block;
        width: 100%;
    }
`
const Left = styled.div`
    flex: 1;
    padding-top: 80px;
    padding: 20px;
`
const Right = styled.div`
    display: flex;
    flex: 2;
    padding-top: 80px;

    justify-content: center;

    
`
const Title = styled.h2`
    padding-top: 50px;
    margin-bottom: 60px;
    font-size: 2rem;
    font-weight: 500;
`

const Text = styled.p`
    font-size: 1.2rem;
    padding-bottom: 100px;
`
const Button = styled.button`
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    padding: 6px 40px;
    background-color: transparent;
    border-color: #343a40;
    color: #343a40;
    border-radius: 0.25rem;
`

const Parallax = styled.div`
    width: 100%;
    background-image: url(${Control});
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    margin-bottom: 50px;

`

export default Home
