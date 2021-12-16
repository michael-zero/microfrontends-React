import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <Header>
            <Logo>
                <Titulo to="/">Zero Corps</Titulo>
            </Logo>

            <NavMenu>
                <NavItem>
                    <NavLink to="products" end>Store</NavLink>
                </NavItem>
            </NavMenu>
        </Header>
    )
}

export default Navbar


const Header = styled.header`
    display: flex;
    align-items: center;
    
`
const Logo = styled.div`
    max-width: 130px;
    margin-right: 20px

`
const NavMenu = styled.ul`
    display: 'flex';
    max-width: 200px
`
const NavItem = styled.li`
    display: flex;
    text-decoration: none;

    a {
        text-decoration: none;
    }
`
const Titulo = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
`
