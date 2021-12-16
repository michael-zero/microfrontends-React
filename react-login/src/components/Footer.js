import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2021 ZeroCorps. All rights reserved.</p>
        </FooterContainer>
    )
}

export default Footer
const FooterContainer = styled.footer`
    max-width: 1400px;
    width: 100%;
    p{
        text-align: center;
    }

     margin-top: 90px;
`