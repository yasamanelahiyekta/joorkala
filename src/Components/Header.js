import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-evenly items-center w-full border-2 border-stone-500 pt-2 pb-2 mb-4 bg-stone-200'>
            <Typography onClick={ () => navigate("/") } className='hover:opacity-60 cursor-pointer'>HOME</Typography>
            <Typography onClick={ () => navigate("/pc-shop") } className='hover:opacity-60 cursor-pointer'>SHOP</Typography>
            <Typography onClick={ () => navigate("/gr-shop") } className='hover:opacity-60 cursor-pointer'> GROSERY SHOP</Typography>
        </div>
    )
}

export default Header