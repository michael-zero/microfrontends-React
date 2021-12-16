import React from 'react'
import styled from 'styled-components'
import headset from '../src/assets/headset.jpg'

const App = () => {
    return (
        <Content>
            <Card>
               <CardTop>
                    <img src={headset} alt="Headset" />
               </CardTop>
               <CardBody>
                <CardTitle>Headset JBL Quantum 100</CardTitle>
                <p>Price <span style={{fontWeight: '500'}}>$300.00</span></p>
               </CardBody>
               <CardFooter>
                    <Button>Saiba mais</Button>
               </CardFooter>
            </Card>

            <Card>
               <CardTop>
                    <img src={headset} alt="Headset" />
               </CardTop>
               <CardBody>
                <CardTitle>Headset JBL Quantum 100</CardTitle>
                <p>Price <span style={{fontWeight: '500'}}>$300.00</span></p>
               </CardBody>
               <CardFooter>
                    <Button>Saiba mais</Button>
               </CardFooter>
            </Card>

            <Card>
               <CardTop>
                    <img src={headset} alt="Headset" />
               </CardTop>
               <CardBody>
                <CardTitle>Headset JBL Quantum 100</CardTitle>
                <p>Price <span style={{fontWeight: '500'}}>$300.00</span></p>
               </CardBody>
               <CardFooter>
                    <Button>Saiba mais</Button>
               </CardFooter>
            </Card>

            <Card>
               <CardTop>
                    <img src={headset} alt="Headset" />
               </CardTop>
               <CardBody>
                <CardTitle>Headset JBL Quantum 100</CardTitle>
                <p>Price <span style={{fontWeight: '500'}}>$300.00</span></p>
               </CardBody>
               <CardFooter>
                    <Button>Saiba mais</Button>
               </CardFooter>
            </Card>
        </Content>
    )
}

const Content = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 40px;
    margin-left: auto;
    margin-right: auto;
    
   
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
    
    @media(min-width: 992px) {
        padding-left: 20px;
    }

 
`
const Card = styled.div`
    min-width: 200px;
    max-width: 300px;

    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);;

 

    @media(min-width: 992px) {
       max-width: 380px;
    }

`
const CardTop = styled.div`
    max-height: 300px;
    img{
        width: 100%;
        display: block;
    }
`
const CardBody = styled.div`
    padding: 0 20px;
`
const CardFooter = styled.div`
    padding: 20px 20px 40px 20px;

`
const Button = styled.button`
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    padding: 6px 20px;
    background-color: #fff;
    border: 0.7px solid #343a40;
    color: #343a40;
    border-radius: 0.25rem;
`
const CardTitle = styled.h5`
    padding-bottom: 0; 
`
export default App
