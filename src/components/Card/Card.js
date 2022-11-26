import React from 'react'
import { Card as CardWrapper, CardContent, CardMedia, Typography } from '@mui/material'
import "./Card.css"

const Card = ({ animal }) => {

  return (
    <CardWrapper sx={{ maxWidth: "350px"}}>
        <CardMedia 
        component="img"
        src={animal.imageUrl}
        height="150"
        />
        <CardContent>
            <Typography sx={{ display:"flex", justifyContent: "space-between", alignItems: "center" }} variant='h5'>
                {animal.name}
                <span className='card-title-type'>Type: {animal.type}</span>
                </Typography>
                <Typography variant='p'>
                  Age: {animal.age}
                </Typography>
        </CardContent>
    </CardWrapper>
  )
}

export default Card