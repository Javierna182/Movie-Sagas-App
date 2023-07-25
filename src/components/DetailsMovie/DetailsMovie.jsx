import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function DetailsMovie() {

const {id} = useParams();// use to grab the id from the url    
const movies = useSelector(store => store.movies);// use to select from the movies DB
const movie = movies.filter(movie => movie.id == id)[0];// filters the movies so we get the movie that we want

const genres = useSelector(store => store.genres);// use to select from the genres DB
// const genre = genres.filter(genre => genre.id == id)[0];// filters the genres

const history = useHistory(); 
const dispatch = useDispatch();

useEffect(() => {
    dispatch({ type: "FETCH_GENRES"});
}, []);

const goToHome = () => {
    history.push(`/`)
}
    return (
        <div>
            {/* {genres} */}
            <h1>Title {movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
            <h1>Description: {movie.description}</h1>
            <button onClick={goToHome}>HOME</button>
            {/* <h1>{genre.id}</h1> */}
        </div>

    );
}

export default DetailsMovie;
