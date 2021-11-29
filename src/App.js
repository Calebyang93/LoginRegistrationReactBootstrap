import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieList from './Components/movielist';
import MovieState from './Components/movieState';
import moviesList2 from './Components/movieState';
import movieList2 from './Components/movieState';
import Button from 'react-bootstrap';
import MovieReviewCard from './Components/moviereview';

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> Filter by Genres</span>
    </button>
  );
}
function SetFilter() {
  const [filter, setFilter] = useState("all");
const filter_map = {
  All: () => true, 
  Genre: moviesList2 => !moviesList2.genre,
  id: moviesList2 => !moviesList2.id,
  Date: moviesList2 => !moviesList2.date
};
const filter_names = Object.keys(filter_map);
const filterList = filter_names.map(genre => (
  <FilterButton key={moviesList2.id} genre={moviesList2.genre}
  isPressed={genre === filter}
  setFilter={setFilter}
/>
));

// const genreList = moviesList2
// .filter(filter_map[filter])
// .map(moviesList2 => (
//   <moviesList2
//     id={moviesList2.id}
//     name={moviesList2.name}
//     genre={moviesList2.genre}
//     key={moviesList2.id}
//     //toggleGenre={toggleGenre}
//   />
// ));
}


function SelectGenre(genre) {
  const genreList = moviesList2.map(movieList2 =>  (
    <moviesList2
    id={moviesList2.id}
    name={moviesList2.name}
    genre={moviesList2.genre}
    key={moviesList2.id}
    //toggleGenre={toggleGenre}
  />
  )); {
  // if this task has the same ID as the edited task
    if (genre === movieList2.id) {
      //
      return {...movieList2, genre: {genre}}
    }
    return movieList2;
  };
  //setGenre(genreList);
}



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
    <MovieReviewCard />
  </div>
  </Router>);
}

export default App;
