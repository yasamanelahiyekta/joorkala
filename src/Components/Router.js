import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PC from './PC'
import Gr from './Gr'
import Electronics from './Electronics'
import Jewelery from './Jewelery'
import Men from './Men'
import Women from './Women'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/pc-shop' element={ <PC /> } />
            <Route path='/gr-shop' element={ <Gr /> } />
            <Route path='/electronics' element={ <Electronics /> } />
            <Route path='/jewelery' element={ <Jewelery /> } />
            <Route path='/men-cloth' element={ <Men /> } />
            <Route path='/women-cloth' element={ <Women /> } />
        </Routes>
    )
}

export default Router