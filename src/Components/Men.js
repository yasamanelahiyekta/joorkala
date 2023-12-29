import React from 'react'
import { Card, CardActionArea, CardContent, Grid, Rating, Typography } from '@mui/material';


const Men = ({ resault, value }) => {
    const category = resault.filter(item => {
        return item.category == "men's clothing"

    })
    return (
        <>
            {
                category.length ? category.map(item => {
                    return (
                        <Grid item xl={ 3 } md={ 4 } sm={ 6 } xs={ 12 } key={ item.id } className='flex items-center justify-center' >

                            <Card className='w-screen '>
                                <CardActionArea>
                                    <div className='imagehome'>
                                        <img src={ item.image } alt={ item.title } />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" onClick={ () => {
                                            if (value[0] < item.price < value[1]) {
                                                console.log(value[0], value[1]);
                                                console.log(30 <= 35 <= 50);
                                                console.log(item.price);
                                            }
                                        } }>
                                            { item.title }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">countInStock:{ item.rating.count }</Typography>
                                        <Typography variant="body2" color="text.secondary">price:{ item.price }</Typography>
                                        <Typography variant="body2" color="text.secondary">color:{ item.category }</Typography>
                                        <Rating name="read-only" value={ item.rating.rate } readOnly precision={ 0.25 } />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }) : <Typography className='h-screen flex justify-center items-center w-screen'>nothing found</Typography>
            }</>
    )
}

export default Men