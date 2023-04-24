import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";

const Movie = ({id}) => {
    const [movie, setMovie] = useState([])

    const getMovie = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setMovie(res.data.results)
            })
    }
    useEffect(() => {
        getMovie(API__KEY)
    },[])
    console.log(movie)
    return (
        <div id="movie">
            <div className="container">
                <div className="movie">
                    {
                        movie.map((el) => (
                            <div className="movie--card" style={{
                                backgroundImage:`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${el.backdrop_path}`
                            }}>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Movie;