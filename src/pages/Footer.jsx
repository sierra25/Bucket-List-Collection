import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button, Stack, Box, Grid} from "@mui/material/";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
         Bucket List Album
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6}} component="footer">
    
        <Copyright />
      </Box>
      {/* End footer */} 
       
    
       
       
       </div>
  )
}

export default Footer