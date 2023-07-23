import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function DetailsMovie() {

const {id} = useParams();// use to grab the id from the url    
const movies = useSelector(store => store.movies);// use to select from the movies
const movie = movies.filter(movie => movie.id == id)[0];// filters the movies so we get the movie that we want
const history = useHistory(); 

const goToHome = () => {
    history.push(`/`)
}
    return (
        <div>
            <h1>Title {movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
            <h1>Description: {movie.description}</h1>
            <button onClick={goToHome}>HOME</button>
        </div>

    );
}

export default DetailsMovie;
