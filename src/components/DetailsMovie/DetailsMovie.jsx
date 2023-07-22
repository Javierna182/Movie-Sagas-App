import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function DetailsMovie() {

const {id} = useParams();    
const movies = useSelector(store => store.movies);

const movie = movies.filter(movie => movie.id == id)[0];

console.log(id,' hereee')
console.log(movie,' aaaaa')
    return (
    
        <div>Title {movie.title}</div>
    );
}

export default DetailsMovie;

{/* <section className="movies">
{movies.map(movie => {
    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <button onClick={() => goToDetail(movie.id)}>INFO</button>
        </div> */}