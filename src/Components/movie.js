import React, {Component } from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state= [{id: 1, name: "Rush Hour 3", date: 2003 , genre: "Action"},
        {id: 2, name: 'Harry Potter and the Chamber of Secret', date: "2004", genre: "Science Fiction"},
        {id: 3, name: 'Transformers 1', date: "2008", genre: "Action"},
        {id: 4, name: 'Slumdog Millionaire', date: "2009", genre: "Thriller"},
        {id: 5, name: 'Superman returns', date: "2002", genre: "Action"},
        {id: 6, name: 'Harold and Kumar', date: "1999", genre: "Comedy"}];
    }
    render() {
        return <h2>Movie List  {this.state.value} </h2>;
    }
}

export default Movie;