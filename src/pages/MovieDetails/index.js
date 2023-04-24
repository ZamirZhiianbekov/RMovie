import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";
import {Link, useParams} from "react-router-dom";
import {IoIosBookmark, IoIosHeart, IoIosStar, IoMdListBox, IoMdPlay} from "react-icons/io";
import ActorsCard from "../../components/ActrosCard";
import Movie from "../../components/Movie";




const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {movieId} = useParams()
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ru-RU`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
        getDetails(API__KEY)
    },[])
    console.log(details)
    console.log(movieId)
    const { poster_path,genres,title,release_date,runtime,original_language,vote_average,tagline,overview,backdrop_path} = details
    return (
        <>
            <div id="details" style={{
                backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`
            }}>
                <div className="container">
                    <div className="details" style={{color:"white"}}>
                        <div className="details--img">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                        </div>
                        <div className="details--info">
                            <h1>{title}<span>(2023)</span></h1>
                            <div className="details--info__data">
                                <h4>{release_date} ({original_language})</h4>
                                <p>● {genres?.map((el) =><h3>{el.name},</h3>)}</p>
                                <h4>● {Math.floor(runtime / 60)}h{runtime % 60}min </h4>
                            </div>

                            <div className="details--title__content">
                                <div className="result">
                                    <h2>{Math.round(vote_average * 10)}<sup>%</sup> </h2>
                                </div>
                                <h2 className="rey">Рейтинг</h2>
                                <Link to={"/"}>
                                    <div className="icons">
                                        <div>
                                            <IoMdListBox className="icon"/>
                                        </div>
                                        <div>
                                            <IoIosHeart className="icon"/>
                                        </div>
                                        <div>
                                            <IoIosBookmark className="icon"/>
                                        </div>
                                        <div>
                                            <IoIosStar className="icon"/>
                                        </div>
                                        < IoMdPlay className="play"/>

                                        <h4 className="playTitle">Воспроизвозти трейлер</h4>

                                    </div>
                                </Link>
                            </div>
                            <i>{tagline}</i>
                            <h3>Обзор</h3>
                            <p>{overview}</p>
                            <ul>
                                <p>{}</p>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ActorsCard id={movieId}/>
            <Movie id={movieId}/>
        </>


    );
};

export default MovieDetails;

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US