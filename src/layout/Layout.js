import React from 'react'
import { Box, AppBar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
        <Box sx={{ flexGrow: 1, height:"100vh" }}>
        <AppBar sx={{padding:1}}>
            <Typography variant='h4'>NavBar</Typography>
        </AppBar>
        <Container sx={{marginTop:"70px"}}>
        {children}
        </Container>
        </Box>
    </div>
  )
}

export default Layout