import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        
        <Header>
            <Container>
                <Logo>
                    <LogoText to="/">Zero&nbsp;Corps</LogoText>
                </Logo>

                <NavMenu>
                    <NavItem>
                        <LinkText to="products" end>STORE</LinkText>
                    </NavItem>
                    <NavItem>
                        <LinkText to="products" end>ABOUT</LinkText>
                    </NavItem>
                    <NavItem>
                        <LinkText to="products" end>LOGIN</LinkText>
                    </NavItem>
                </NavMenu>

                <NavMenu>
                    <NavItem>
                        <LinkText to="products" end>GITHUB</LinkText>
                    </NavItem>
                </NavMenu>
            </Container>
        </Header>
    )
}

export default Navbar


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const Header = styled.header`
    outline: 1px solid pink;
    display: flex; 
`
const Logo = styled.div`
    max-width: 160px;
    

`
const NavMenu = styled.ul`
    display: flex;
    list-style: none;
`
const NavItem = styled.li`
    margin-right: 10px;

    a {
        text-decoration: none;
        line-height: 54px;

    }

    @media (min-width: 400px){
        margin-right: 20px;
    }
`
const LinkText = styled(NavLink)`
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;

`
const LogoText = styled(NavLink)`
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 54px;

`
