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
                        <LinkExterno href="https://github.com/michael-zero"
                        target="_blank"
                        end>GITHUB</LinkExterno>
                    </NavItem>
                </NavMenu>
            </Container>
        </Header>
    )
}

export default Navbar


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const Header = styled.header`
    display: flex; 
    box-shadow: 0px 4px 2px 0px rgba(0,0,0,0.015);

    @media(min-width: 425px){
        padding-left: 20px;
        padding-right: 20px;
    }
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
    font-size: 1rem;
    font-weight: 500;

    &:visited{
        color:  #343a40;
    }

    @media(min-width: 472px){
        font-size: 1.5rem;
    }

    @media(min-width: 900px){
        font-size: 1.1rem;
    }

`
const LogoText = styled(NavLink)`
    text-decoration: none;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 54px;

    a {
        color: pink;
    }
    
    &:visited{
        color:  #343a40;
    }

    @media(min-width: 992px){
        font-size: 1.4rem;
    }
`

const LinkExterno = styled.a`
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 54px;
    color:  #343a40;

    &:visited{
        color:  #343a40;
    }

    @media(min-width: 472px){
        font-size: 1.5rem;
    }

    @media(min-width: 900px){
        font-size: 1.1rem;
    }
`
