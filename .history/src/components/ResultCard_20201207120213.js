import React from 'react'

export const ResultCard = movie => {
    const record = movie.movie

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.movie.poster_path}`}
                        alt={`${movie.movie.title} Poster`} />
                ) : (
                        <div className="filler-poster"></div>
                    )}
            </div>
        </div>
    )
}
