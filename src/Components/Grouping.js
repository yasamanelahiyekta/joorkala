import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Grouping = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-zinc-200 border-b p-2 mb-5'>
            <Box sx={ { minWidth: 120 } }>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        grouping
                    </InputLabel>
                    <NativeSelect
                        defaultValue={ "ALL" }
                        inputProps={ {
                            name: 'grouping',
                            id: 'uncontrolled-native',
                        } }
                    >
                        <option onClick={ () => navigate("/") } value={ "ALL" }>ALL</option>
                        <option onClick={ () => navigate("/pc-shop") } value={ "MOUSE" }>PC</option>
                        <option onClick={ () => navigate("/gr-shop") } value={ "GROSERY" }>GROSERY</option>
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    )
}

export default Grouping