import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button, Stack, Box, Grid} from "@mui/material/";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    image: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  /*grabbing id from pathname*/
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="image"
        onChange={handleChange}
      />
      <button className="formButton" onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;
