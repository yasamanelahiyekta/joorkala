import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpc } from '../Redux/Action'
import { Box, Card, CardActionArea, CardContent, Divider, FormControl, FormControlLabel, Grid, LinearProgress, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import Electronics from './Electronics'
import Jewelery from './Jewelery'
import Men from './Men'
import Women from './Women'

const PC = () => {
    const { pcData, pcLoading, pcError } = useSelector(s => s.getPc)
    const [category, setCategory] = useState('');
    const price = []
    const menue = [...new Set(pcData.map(item => item.category))]
    pcData.map(item => price.push(item.price))
    price.sort((a, b) => { return a - b })
    const [value, setValue] = useState([price[0] - 2, price[price.length - 1] + 2])
    console.log(category);
    const valuetext = (value) => {
        return `${value[0]}-${value[1]}`;
    }
    const resault = pcData.filter(item => {
        return value[0] <= item.price && item.price <= value[1]
    })
    const dispatch = useDispatch()
    const localPc = JSON.parse(localStorage.getItem("pc"))
    useEffect(() => {
        if (!localPc?.length) {
            dispatch(getpc())
        }

    }, [])
    console.log(menue);
    return (
        <div className='flex items-center justify-center xl:flex-row flex-col'>
            { pcLoading ? "" : pcError ? <Typography>error</Typography> : (
                <div className=' bg-stone-200 border-stone-600 border flex flex-col justify-center 
                xl:sticky xl:top-0 bottom-1/2 h-max rounded m-2 xl:w-1/4 p-5'>
                    <div className='flex flex-col'>
                        <div>PRICE</div>
                        <div className='flex w-full items-center justify-around flex-col' >


                            <div className=' flex gap-2'>
                                <Typography className='font-extralight'>minimom price </Typography>
                                <Typography className='font-extralight cursor-context-menu hover:border hover:solid hover:border-gray-300'>{ value[0] }</Typography>
                            </div>
                            <Box sx={ { width: 300 } } >
                                <Slider
                                    size='small'
                                    getAriaLabel={ () => 'price' }
                                    value={ value }
                                    onChange={ (e) => {
                                        console.log(e.target.value);
                                        setValue([e.target.value[0], e.target.value[1]]);

                                    }
                                    }
                                    min={ price[0] }
                                    max={ price[price.length - 1] }
                                    getAriaValueText={ valuetext }
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                            <div className=' flex gap-2'>
                                <Typography className='font-extralight'>maximom price</Typography>
                                <Typography className='font-extralight'> { value[1] }</Typography>
                            </div>

                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col'>
                        <div>CATEGORY</div>
                        <div className=' w-full xl:items-center xl:justify-around xl:flex hidden' >

                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="electronics" control={ <Radio /> } label="electronics" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="jewelery" control={ <Radio /> } label="jewelery" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="men's clothing" control={ <Radio /> } label="men's clothing" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="women's clothing" control={ <Radio /> } label="women's clothing" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="all" control={ <Radio /> } label="all" />

                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className=' w-full items-center justify-around flex xl:hidden' >

                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="electronics" control={ <Radio /> } label="electronics" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="jewelery" control={ <Radio /> } label="jewelery" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="men's clothing" control={ <Radio /> } label="men's clothing" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="women's clothing" control={ <Radio /> } label="women's clothing" />
                                    <FormControlLabel onChange={ (e) => setCategory(e.target.value) } value="all" control={ <Radio /> } label="all" />

                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
            ) }
            { pcLoading ? (
                <div className='h-screen flex justify-center items-center'>
                    <LinearProgress color="inherit" />
                </div>
            ) :
                pcError ? (<Typography color={ red }> error</Typography>) :
                    (<div className='flex flex-col items-center justify-center w-3/4 '>
                        <Grid container spacing={ 2 } className='w-3/4 overflow-y-scroll h-screen p-4'>
                            { category === "electronics" ? <Electronics resault={ resault } category={ category } value={ value } /> : category === "jewelery" ? <Jewelery resault={ resault } category={ category } value={ value } /> :
                                category === "men's clothing" ? <Men resault={ resault } category={ category } value={ value } /> : category === "women's clothing" ? <Women resault={ resault } category={ category } value={ value } /> : resault.length ?
                                    resault.map(item => {
                                        return (
                                            <Grid item xl={ 3 } md={ 4 } sm={ 6 } xs={ 12 } key={ item.id }  >

                                                <Card sx={ { maxWidth: 345 } } className='w-full '>
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
                                                </Card>
                                            </Grid>
                                        )
                                    })
                                    : (<Typography>nothing found</Typography>) }
                        </Grid>
                    </div>) }
        </div>
    )
}

export default PC