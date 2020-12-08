import React from 'react'

export const ResultCard = movie => {
    const record = movie.movie

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {record.poster_path? (
                    <img src={`https://image.tmdb.org/t/p/w200${record.poster_path}`}
                        alt={`${record.title} Poster`} />
                ) : (
                        <div className="filler-poster"></div>
                    )}
            </div>
        </div>
    )
}
