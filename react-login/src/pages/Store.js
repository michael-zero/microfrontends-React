import React from 'react'
import Parcel from 'single-spa-react/parcel'

const Store = () => {
    return (
        <div>
           <Parcel
              config={() => System.import('@ml/react-store')} //importando meu outro microfrontend
            />
        </div>
    )
}

export default Store
