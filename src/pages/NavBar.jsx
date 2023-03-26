import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button, Stack, Box, Link, Grid} from "@mui/material/";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const NavBar = () => {
  return (
    <div>
      <AppBar >
        <Toolbar>

          <Typography position="relative" variant="h4" color="inherit" noWrap> <CameraIcon sx={{ mr: 2 }} /> Bucket List Photo Album!!!
          
          </Typography>

        
      

        </Toolbar>

      </AppBar>

      
      
      </div>
  )
}

export default NavBar;