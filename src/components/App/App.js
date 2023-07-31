import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsMovie from '../DetailsMovie/DetailsMovie';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>The Movies Saga!</h1>
      </header>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        

        <Route path="/details/:id" exact>
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
