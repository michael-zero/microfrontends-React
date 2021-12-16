import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {GlobalStyle} from './styles/GlobalStyle'  
import Home from './pages/Home'
import Store from './pages/Store'
import Layout from './pages/Layout'

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Router basename='react-login'>
                <Layout>
                    <Routes>
                    <Route path="/" element={<Home/>}/>  
                    <Route path="products" element={<Store/>}/>  
                    </Routes>
                </Layout> 
            </Router>
        </>
    )
}

export default App
