import { Box, Button, Card, CardActionArea, CardContent, CardMedia, FormControl, InputLabel, LinearProgress, MenuItem, NativeSelect, Rating, Select, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getgr, getpc } from '../Redux/Action'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { pcData, pcLoading, pcError } = useSelector(s => s.getPc)
    const { grData, grLoading, grError } = useSelector(s => s.getGr)
    const localPc = JSON.parse(localStorage.getItem("pc"))
    const localGr = JSON.parse(localStorage.getItem("gr"))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!localPc?.length || !localGr?.length) {
            dispatch(getpc())
            dispatch(getgr())
        }

    }, [])
    console.log(grData, pcData, grLoading, pcLoading);
    return (
        <div className='' >
            { pcLoading || grLoading ? (<Typography className='h-screen'><LinearProgress color="inherit" /></Typography>) : pcError || grError ? (<Typography>error</Typography>) :
                <div className='flex  flex-col items-center justify-center m-4  gap-5'>
                    <div className='bg-stone-200 border solid border-stone-500 h-1/2 rounded  flex flex-col items-center justify-center'>
                        <Typography variant='h6' className='m-1'>LECTRONICS</Typography>
                        <div className='h-full  p-5 flex  gap-2 flex-nowrap xl:flex-row flex-col'>{ pcData.filter(item => {
                            return item.category.localeCompare("electronics") == 0
                        }).map(item => <Card key={ item.id } sx={ { maxWidth: 345 } } className='w-full p-1'>
                            <div className='imagehome'>
                                <img src={ item.image } alt={ item.title } />
                            </div>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        { item.title }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.rating.count }</Typography>
                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                    <Typography variant="body2" color="text.secondary">color :{ item.category }</Typography>
                                    <Rating name="read-only" value={ item.rating.rate } readOnly precision={ 0.25 } />
                                </CardContent>
                            </CardActionArea>
                        </Card>) }</div>
                        <div className='hover:shadow flex items-center justify-center gap-1' onClick={ (() => navigate("/pc-shop")) }>
                            <Typography>more</Typography>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='bg-stone-200 border solid border-stone-500  h-1/2 rounded overflow-x-scroll flex flex-col items-center justify-center '>
                        <Typography variant='h6' className='m-1'>JEWELERY</Typography>
                        <div className='h-1/6  p-5 flex  gap-2 xl:flex-row flex-col'>{ pcData.filter(item => {
                            return item.category.localeCompare("jewelery") == 0
                        }).map(item => <Card key={ item.id } sx={ { maxWidth: 345 } } className='w-full p-2'>
                            <div className='imagehome'>
                                <img src={ item.image } alt={ item.title } />
                            </div>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        { item.title }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.rating.count }</Typography>
                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                    <Typography variant="body2" color="text.secondary">color :{ item.category }</Typography>
                                    <Rating name="read-only" value={ item.rating.rate } readOnly precision={ 0.25 } />
                                </CardContent>
                            </CardActionArea>
                        </Card>) }</div>
                        <div className='hover:shadow flex items-center justify-center gap-1' onClick={ (() => navigate("/pc-shop")) }>
                            <Typography>more</Typography>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='bg-stone-200 border solid border-stone-500  h-1/2 rounded overflow-x-scroll flex flex-col items-center justify-center'>
                        <Typography variant='h6' className='m-1'>MEN</Typography>

                        <div className='h-1/6  p-5 flex  gap-2 xl:flex-row flex-col'>{ pcData.filter(item => {
                            return item.category.localeCompare("men's clothing") == 0
                        }).map(item => <Card key={ item.id } sx={ { maxWidth: 345 } } className='w-full p-2'>
                            <div className='imagehome'>
                                <img src={ item.image } alt={ item.title } />
                            </div>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        { item.title }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.rating.count }</Typography>
                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                    <Typography variant="body2" color="text.secondary">color :{ item.category }</Typography>
                                    <Rating name="read-only" value={ item.rating.rate } readOnly precision={ 0.25 } />
                                </CardContent>
                            </CardActionArea>
                        </Card>) }</div>
                        <div className='hover:shadow flex items-center justify-center gap-1' onClick={ (() => navigate("/pc-shop")) } >
                            <Typography>more</Typography>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='bg-stone-200 border solid border-stone-500  h-1/2 rounded overflow-x-scroll flex flex-col items-center justify-center'>
                        <Typography variant='h6' className='m-1'>WOMEN</Typography>

                        <div className='h-1/6  p-5 flex gap-2 xl:flex-row flex-col'>{ pcData.filter(item => {
                            return item.category.localeCompare("women's clothing") == 0
                        }).map(item => <Card key={ item.id } sx={ { maxWidth: 345 } } className='w-full p-2'>
                            <div className='imagehome'>
                                <img src={ item.image } alt={ item.title } />
                            </div>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        { item.title }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.rating.count }</Typography>
                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                    <Typography variant="body2" color="text.secondary">color :{ item.category }</Typography>
                                    <Rating name="read-only" value={ item.rating.rate } readOnly precision={ 0.25 } />
                                </CardContent>
                            </CardActionArea>
                        </Card>) }</div>
                        <div className='hover:shadow flex items-center justify-center gap-1 ' onClick={ (() => navigate("/pc-shop")) }>
                            <Typography>more</Typography>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='bg-stone-200 border solid border-stone-500  h-1/2 rounded overflow-x-scroll flex flex-col items-center justify-center'>
                        <Typography variant='h6' className='m-1'>GROSERY</Typography>

                        <div className='h-2/4  p-5 flex gap-2 xl:flex-row flex-col'>{ grData.slice(32).map(item => <Card key={ item.id } sx={ { maxWidth: 345 } } className='w-full '>

                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        { item.name }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.countInStock }</Typography>
                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                    <Rating name="read-only" value={ item.rate } readOnly precision={ 0.25 } />
                                </CardContent>
                            </CardActionArea>
                        </Card>) }</div>
                        <div className='hover:shadow flex items-center justify-center gap-1' onClick={ (() => navigate("/gr-shop")) }>
                            <Typography>more</Typography>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home