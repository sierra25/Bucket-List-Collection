import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button, Stack, Box, Grid} from "@mui/material/";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();



/*using axios*/
const Books = () => {
  /*creating a UseState and storing books inside of it*/
  const [books, setBooks] = useState([]);

  /*making an API request so using async and await*/
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
   
   
   <div>





<ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              padding-top="100px"
              gutterBottom
            >
              Collection
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome, this is a collection of fun bucket list activities. You can add, delete, or update the items in the collection. You can also check them off as completed. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
             
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
        Add New Activity
        </Link>
     
      </Button>
             

            </Stack>
          </Container>
        </Box>



  


        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
          
          

          
          
          <Grid container spacing={4}>







            {books.map((book) => (
              <Grid item key={book} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="{book.image}" 
                    alt="https://source.unsplash.com/random"
                    
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
         
                    {book.title}
                    </Typography>
                    <Typography>
                    {book.description}
                    <span>${book.price}</span>
                    </Typography>
                  </CardContent>
                  <CardActions>


     
       
        
        
                    <Button size="small"> <button className="update">
           <Link
             to={`/update/${book.id}`}
             style={{ color: "inherit", textDecoration: "none" }}
           >
             Update
           </Link>
           </button>
         </Button>
                    <Button size="small"> <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button> </Button>



                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
      
      
    </div>
  );
};

export default Books;