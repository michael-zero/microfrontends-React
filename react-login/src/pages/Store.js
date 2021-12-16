import React from 'react'
import Parcel from 'single-spa-react/parcel'
import styled from 'styled-components'
const Store = () => {
    return (
        <Container>
           <Parcel
              config={() => System.import('@ml/react-store')} //importando meu outro microfrontend
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default Store
