import { AppBar, Box, Divider, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-stone-300 grid grid-cols-1 grid-rows-2 mt-5 w-full'>
            <div className='font-semibold font-mono'>
                JOORKALA
            </div>
            <Divider />
            < Box sx={ { flexGrow: 1 }
            }>
                <div className='mb-5'>
                    <div className='flex  flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center h-2/6'>
                        <div className='text-left'>
                            <Typography>choose </Typography>
                            <Typography>whatever</Typography>
                            <Typography>you want 😊</Typography>
                        </div>
                        <div className='text-left'>
                            <Typography>tel 1:09214358901</Typography>
                            <Typography>tel 2:09214358902</Typography>
                            <Typography>tel 3:09214358903</Typography>
                        </div>
                        <div className='text-left'>
                            <Typography><GitHubIcon /> joorkala</Typography>
                            <Typography><TelegramIcon /> @jkala</Typography>
                            <Typography>< InstagramIcon /> jkala</Typography>
                        </div>
                    </div>
                </div >
            </Box>
        </div>
    )
}

export default Footer