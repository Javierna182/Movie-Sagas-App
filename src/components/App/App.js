import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsMovie from '../DetailsMovie/DetailsMovie';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        

        <Route path="/details" exact>
          <DetailsMovie />
        </Route>


        <Route path="/add" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
