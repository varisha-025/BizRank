import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../images/c3.jpg'
export default function ImgMediaCard() {
  return (
    <Card style={{background:"#1e1e1e"}} sx={{ width: '100%', height:"100%"  }}>

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{background:"#1976d2"}} size="small">Share</Button>
        <Button style={{background:"#3d454e"}}  size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
