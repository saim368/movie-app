import React from 'react'

export const ResultCard = (movie) => {
    console.log(movie.poster_path)
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200/rcC07RJLV0cQDFRj1HlnrGrZnho.jpg`}
                        alt={`${movie.title} Poster`} />
                ) : (
                        <div className="filler-poster"></div>
                    )}
            </div>
        </div>
    )
}
