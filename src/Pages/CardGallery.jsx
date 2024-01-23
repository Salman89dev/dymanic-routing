import React from 'react'
import { data } from '../data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardGallery = () => {
    const navigate=useNavigate()

    let handleNavigate=(id)=>
    {
        navigate(`/product/${id}`)
    }
  return (
    <div>
        <h1 style={{marginBottom:50,textAlign:'center'}}>Product Gallery</h1>
    <Grid container spacing={5}>

        {
            data.map((gallery,index)=>
            {
                const {title,description,image,price,id}=gallery;
                return     <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardMedia 
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={image}
                    />
                    <CardContent>
                    <Typography className='proTitle' gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Product ID: {id}
                    </Typography>
                    <Typography className='proDes' variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={()=>handleNavigate(id)}>Read More</Button>
                    </CardActions>
                </Card>
                </Grid>
            })
        }
      </Grid>

    </div>
  )
}

export default CardGallery
