import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const products = [
   {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Wireless+Headphones"
   },
   {
      id: 2,
      name: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Bluetooth+Speaker"
   },
   {
      id: 3,
      name: "Smartphone Stand",
      price: 15.99,
      category: "Accessories",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Smartphone+Stand"
   },
   {
      id: 4,
      name: "Laptop Backpack",
      price: 49.99,
      category: "Bags",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Laptop+Backpack"
   },
   {
      id: 5,
      name: "LED Desk Lamp",
      price: 25.99,
      category: "Home",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=LED+Desk+Lamp"
   },
   {
      id: 6,
      name: "Gaming Mouse",
      price: 29.99,
      category: "Gaming",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Gaming+Mouse"
   },
   {
      id: 7,
      name: "Mechanical Keyboard",
      price: 89.99,
      category: "Gaming",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=Mechanical+Keyboard"
   },
   {
      id: 8,
      name: "4K Monitor",
      price: 299.99,
      category: "Electronics",
      imageUrl: "https://dummyimage.com/600x400/000/fff&text=4K+Monitor"
   }
];





export default function MediaCard() {
   return (
      products.map((product, index) => (
         <Card key={index} sx={{ maxWidth: 345, margin: '10px', display: 'inline-block' }}>
            <CardMedia
               sx={{ height: 140 }}
               image={product.imageUrl}   
               title="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {product.name}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '10px' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
               <Typography variant='body1'>
                  {'Price: ' + product.price + ' $'}
               </Typography>
               <Typography>
                  {'Category: ' + product.category}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
      ))
   );
}