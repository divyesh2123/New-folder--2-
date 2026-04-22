import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import type IProductPage from './interface/IProductPage'

export default function ProductDetails(props: IProductPage) {
  return (
   <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        
        title={props.product.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {props.product.description}
        </Typography>
      </CardContent>
    
      
    </Card>
  )
}
