import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieList from './Components/movielist';
import MovieState from './Components/movieState';

function App() {
  return (<Router>
    <div className="App">
    </div>
    <div className="App">
    </div>
    <div className="auth-wrapper">
    <div className="auth-inner">
      <Switch>
        <Route path="/movieListTable" component={MovieState} />
        <Route path="/movieList" component={MovieList} />
      </Switch>
    </div>
    <MovieList />
    <MovieState />
  </div>
  </Router>);
}

export default App;
