import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cat from '../../Assets/cat.jpeg';

const products = [
   {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
   },
   {
      id: 2,
      name: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
   },
   {
      id: 3,
      name: "Smartphone Stand",
      price: 15.99,
      category: "Accessories",
   },
   {
      id: 4,
      name: "Laptop Backpack",
      price: 49.99,
      category: "Bags",
   },
   {
      id: 5,
      name: "LED Desk Lamp",
      price: 25.99,
      category: "Home",
   },
   {
      id: 6,
      name: "Gaming Mouse",
      price: 29.99,
      category: "Gaming",
   },
   {
      id: 7,
      name: "Mechanical Keyboard",
      price: 89.99,
      category: "Gaming",
   },
   {
      id: 8,
      name: "4K Monitor",
      price: 299.99,
      category: "Electronics",
   },
   {
      id: 9,
      name: "Fitness Tracker",
      price: 99.99,
      category: "Wearables",
   },
   {
      id: 10,
      name: "Coffee Maker",
      price: 79.99,
      category: "Home Appliances",
   },
];



export default function MediaCard() {
   return (
      <Card sx={{ maxWidth: 345}}>
         <CardMedia
            sx={{ height: 140 }}
            image={cat}
            title="green iguana"
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
}