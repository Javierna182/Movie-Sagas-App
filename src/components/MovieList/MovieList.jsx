import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css'

import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory(); 

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

const goToDetail = (id) => {
    console.log(id,'hereee')
    history.push(`/details/${id}`)
}//used to go to each movie details

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [spacing, setSpacing] = React.useState(2);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Box sx={{ width: '500px' }} key={movie.id} >
                            {/* <Stack spacing={1} sx={{ maxWidth: '500px', margin: 'auto'}}> */}
                            <Grid container justifyContent="center" spacing={spacing}>
                            {/* <Grid container spacing={0}> */}
                            <Grid item xs={6}>
                            <Item>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <Button variant="contained" type="submit" onClick={() => goToDetail(movie.id)}>INFO</Button>
                            <FormHelperText>Select for more info</FormHelperText>
                            </Item>
                            </Grid>
                            </Grid>
                            {/* </Grid> */}
                            {/* </Stack> */}
                        </Box>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;