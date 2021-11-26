import React from 'react';

function MovieList() {
    const Movies = [
        {id: 1, name: 'Reservoir Dogs'},
        {id: 2, name: 'Harry Potter and the Philosophers stone'},
        {id: 3, name: 'Amazing Spiderman'},
        {id: 4, name: 'Doctor Zhivago'},
        {id: 5, name: 'Shang Chi and the tale of the 10 rings'},
        {id: 6, name: 'Black Widow'},
    ];

    return (
        <ul>
        {Movies.map(data => (
            <li key={data.id}> {data.name}</li>
        ))}
        </ul>
    );
}

export default MovieList;