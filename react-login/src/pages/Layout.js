import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <Wrapper>
           <Navbar/>
            <Pagina>
             {children}
            </Pagina>
           <Footer/>
        </Wrapper>
    )
}


const Pagina = styled.main`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const Wrapper = styled.div`
`

export default Layout
