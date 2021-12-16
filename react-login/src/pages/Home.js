import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <Content>
            <Titulo>Lorem, ipsum.</Titulo>
        </Content>
    )
}


const Titulo = styled.h1`
    font-size: 1.2rem;
`

const Content = styled.section`
    background-color: #ddd;
`

export default Home
