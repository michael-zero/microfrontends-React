import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <Content>
                <Titulo>Lorem, ipsum.</Titulo>
            </Content>
        </Container>
    )
}

const Container = styled.main`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const Titulo = styled.h1`
    font-size: 1.2rem;
`

const Content = styled.section`
    margin-left: 60px;
`

export default Home
