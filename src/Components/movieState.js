import React, {useState} from 'react';

function MovieState() {
    const  [moviesList2, setMovies] = useState([
        {id: 1, name: 'Rush Hour 3', date: "2003", genre: "Action"},
        {id: 2, name: 'Harry Potter and the Chamber of Secret', date: "2004", genre: "Science Fiction"},
        {id: 1, name: 'Transformers 1', date: "2008", genre: "Action"},
        {id: 1, name: 'Slumdog Millionaire', date: "2009", genre: "Thriller"},
        {id: 1, name: 'Superman returns', date: "2002", genre: "Action"},
        {id: 1, name: 'Harold and Kumar', date: "1999", genre: "Comedy"},
    ]);
    
    return(
        <div className="container">
            <h3 className="p-3 text-center">Display list of Movies </h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {moviesList2 && moviesList2.map(movieList2 =>
                        <tr key={movieList2.id}>
                            <td>{movieList2.name}</td>
                            <td>{movieList2.date}</td>
                            <td>{movieList2.genre}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <ul> {
                moviesList2.filter(movieList2 => movieList2.genre == '')
                .map(movieList2 => <li key={movieList2.genre}>{movieList2.genre}</li>)
            }
            </ul>
        </div>
    );
}

export default MovieState;