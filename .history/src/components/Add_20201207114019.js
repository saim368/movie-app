import React, { useState, useEffect } from 'react';
import { ResultCard } from './ResultCard';

export const Add = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);


    useEffect(() => {
        // if( query)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&${query ? '' : ''}')
                .then((res) => res.json())
                .then((data) => {
                    if (!data.errors) {
                        setResults(data.results);
                    } else {
                        setResults([]);
                    }
                });
      }, [query]);
      
      console.log("Results===>", results)
    //   const onChange = (e) => {
    //     e.preventDefault();

        // setQuery([e.target.value]);

        // if (query.length > 0) {
        //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        //         .then((res) => res.json())
        //         .then((data) => {
        //             if (!data.errors) {
        //                 setResults(data.results);
        //             } else {
        //                 setResults([]);
        //             }
        //         });
        // }
    // }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" value={query} onChange={e => { setQuery(e.target.value)}} />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
