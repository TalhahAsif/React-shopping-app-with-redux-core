import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { AddtoCartAction } from '../../store/Actions/ProductAction';

export default function ImgMediaCard({product}) {

  const dispatch = useDispatch()

  const addtocart = () => {
    dispatch(AddtoCartAction(product))
  }
  // console.log(product)

// console.log("hello")
// console.log(product)

  return (
    <Card sx={{ width: "80%", m:3}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' size="small" onClick={addtocart}>add</Button>
        <Button variant='outlined' color="error" size="small">remove</Button>
      </CardActions>
    </Card>
  );
}