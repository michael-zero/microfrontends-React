import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <p>Todos os direitos reservados.</p>
            </Container>
        </FooterContainer>
    )
}

export default Footer


const Container = styled.div`
    position: fixed;
    bottom: 0;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const FooterContainer = styled.footer`
    outline: 1px solid red;
    display: flex; 
`