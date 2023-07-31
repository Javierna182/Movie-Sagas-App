import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function DetailsMovie() {

const {id} = useParams();// use to grab the id from the url    
const movies = useSelector(store => store.movies);// use to select from the movies DB
const movie = movies.filter(movie => movie.id == id)[0];// filters the movies so we get the movie that we want

const genres = useSelector(store => store.genres);// use to select from the genres DB
// const genre = genres.filter(genre => genre.id == id)[0];// filters the genres

const history = useHistory(); 
const dispatch = useDispatch();

useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload:movie});
}, []);

const goToHome = () => {
    history.push(`/`)
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [spacing, setSpacing] = React.useState(2);
    return (
        <Box sx={{ width: '100%' }} key={movie.id} >
            <Grid container justifyContent="center" spacing={spacing}>
            <Grid item xs={6}>
            <Item>
            <h1>Title {movie.title}</h1>
            <ul>
                {
                    genres.map(genresToDisplay => <div key={genresToDisplay.name}>
                        <li>
                        {genresToDisplay.name}
                            </li>
                        </div>)
                }
            </ul>
                <img src={movie.poster} alt={movie.title}/>
                <h1>Description: {movie.description}</h1>
            <Button variant="contained" type="submit" onClick={goToHome}>HOME</Button>
            </Item>
            </Grid>
            </Grid>
        </Box>

    );
}

export default DetailsMovie;
