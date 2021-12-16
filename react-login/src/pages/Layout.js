import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <div>
           <Navbar/>
            <Pagina>
             {children}
            </Pagina>
           <Footer/>
        </div>
    )
}


const Pagina = styled.main`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    height: 70vh;
`

export default Layout
