import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = movie => {
    const { addMovieToWatchlist } = useContext(GlobalContext);

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {record.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${record.poster_path}`}
                        alt={`${record.title} Poster`} />
                ) : (
                        <div className="filler-poster"></div>
                    )}
            </div>

            <div className= "info">
                <div className= "header">
                    <h3 className= "title">
                        {record.title}
                    </h3>
                    <h4 className= "release-date">
                        {record.release_date ? record.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>

                <div className= "controls">
                    <button className= "btn">
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </div>
    )
}
