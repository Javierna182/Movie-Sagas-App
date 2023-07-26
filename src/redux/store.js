import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeEvery, put } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        movies,
        genres,
    }),
    applyMiddleware(sagaMiddleware, logger)
);

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const response = yield fetch('/api/movie');
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const movies = yield response.json();
        yield put({ type: 'SET_MOVIES', payload: movies });
    } catch {
        console.log('get all error');
        alert('Something went wrong.')
    }
}

function* fetchAllGenres(action) {
    //get all genres from the DB
    console.log('aca', action.payload)
    let id = action.payload.id
    try {
        const response = yield fetch(`/api/genre/details/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const genres = yield response.json();
        console.log('javi',genres[0]); 
        yield put({ type:'SET_GENRES', payload: genres});
    } catch (error) {
        console.log("error fetcing genres", error);
        alert('Something went wrong.')
      }
}


function* watcherSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
}

sagaMiddleware.run(watcherSaga);

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}