import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getgr } from '../Redux/Action'
import { Box, Card, CardActionArea, CardContent, Grid, Rating, Slider, Typography } from '@mui/material'

const Gr = () => {
    const { grData, grLoading, grError } = useSelector(s => s.getGr)
    const price = []
    grData.map(item => price.push(item.price.slice(1)))
    price.sort()
    const [value, setValue] = React.useState([price[0] - 1, price[price.length - 1] + 1]);
    const dispatch = useDispatch()
    console.log(price[0] - 1, Number(price[price.length - 1] + 1));
    const localGr = JSON.parse(localStorage.getItem("gr"))
    useEffect(() => {
        if (!localGr?.length) {

            dispatch(getgr());
        }
    }, [])
    const resault = grData.filter(item => {
        return value[0] <= item.price.slice(1) && item.price.slice(1) <= value[1]
    })
    const valuetext = (value) => {
        return `${value}°C`;
    }
    const handleChange = (e) => {

        setValue([e.target.value[0], e.target.value[1]]);

    };
    return (
        <div className='flex items-center justify-center xl:flex-row flex-col gap-8'>
            { grLoading ? "" : grError ? "" : (
                <div className=' bg-stone-200 border-stone-600 border flex flex-col justify-center 
                xl:sticky xl:top-0 bottom-1/2 h-max rounded m-2 xl:w-1/4 p-5 xl:mb-10'>
                    <div className='flex flex-col'>
                        <div>PRICE</div>
                        <div className='flex w-full items-center justify-around flex-col' >


                            <div className=' flex gap-2'>
                                <Typography className='font-extralight'>minimom price </Typography>
                                <Typography className='font-extralight cursor-context-menu hover:border hover:solid hover:border-gray-300'>{ value[0] }</Typography>
                            </div>
                            <Box sx={ { width: 300 } }>
                                <Slider
                                    size='small'
                                    getAriaLabel={ () => 'price' }
                                    value={ value }
                                    min={ 10 }
                                    max={ 40 }
                                    onChange={ handleChange }
                                    valueLabelDisplay="auto"
                                    getAriaValueText={ valuetext }
                                />
                            </Box>

                            <div className=' flex gap-2'>
                                <Typography className='font-extralight'>maximom price</Typography>
                                <Typography className='font-extralight'> { value[1] }</Typography>
                            </div>

                        </div>
                    </div>
                </div>
            ) }
            { grLoading ? (<Typography variant='h3'>loading</Typography>) :
                grError ? (<Typography variant='h3'>Error</Typography>) : resault.length ?
                    (<div className='flex items-center justify-center xl:mt-8'>
                        <Grid container spacing={ 2 } className='w-1/2 h-screen overflow-y-scroll mt-8'>

                            { resault.map(item => {
                                return (
                                    <Grid item xl={ 3 } md={ 4 } sm={ 6 } xs={ 12 } key={ item.id } className='flex items-center justify-center' >

                                        { value[0] <= item.price <= value[1] && <Card sx={ { maxWidth: 345 } } className='w-screen '>
                                            <CardActionArea>

                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        { item.name }
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">countInStock:{ item.countInStock }</Typography>
                                                    <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                                    <Rating name="read-only" value={ item.rate } readOnly precision={ 0.25 } />
                                                </CardContent>
                                            </CardActionArea>
                                        </Card> }
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </div>
                    ) : (<Typography className='h-screen flex justify-center items-center w-screen'>nothing found</Typography>)
            }  </div>
    )
}

export default Gr