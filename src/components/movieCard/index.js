import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (

            <div className="popular--card">
                <Link to={`/movie/details/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                </Link>
                <h4>{el.title}</h4>
                <h3>Year:{el.release_date}</h3>
                <h4>Popularity{el.popularity}</h4>
            </div>

    );
};

export default MovieCard;