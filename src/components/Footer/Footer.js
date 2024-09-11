import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
   return (
      <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white' }}>
         <Typography>
            © 2022
         </Typography>
      </Container>
   )
}
