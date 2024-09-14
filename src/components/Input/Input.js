import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function Input() {
   function AddInput() {
      return (
         setProducts([
            ...products, { name: name, text: text, price: price, category: category }
         ])
      )
   }
   const [products, setProducts] = useState(
      [

      ]
   );
   console.log(products);

   const [name, setName] = useState('');
   const [text, setText] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');
   return (
      <Box
         component="form"
         sx={{
            '& > :not(style)': { maxWidth: '50%' }, display: 'flex', flexDirection: 'column', maxHeight: '100vh', gap: '15px'
         }}
         noValidate
         autoComplete="off"
      >
         <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
         <TextField id="outlined-basic" label="Text" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
         <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
         <TextField id="outlined-basic" label="Category" variant="outlined" value={category} onChange={(e) => setCategory(e.target.value)} />

         <Stack direction="row" marginTop={'20px'}>
            <Button variant="contained" size='large' endIcon={<SendIcon />} onClick={() => AddInput()}>
               Send
            </Button>
         </Stack>
      </Box>
   );
}