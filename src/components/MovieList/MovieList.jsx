import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css'


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

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <button onClick={() => goToDetail(movie.id)}>INFO</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;