import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";
import user from "../../img/user.png"
import Slider from "react-slick";
import {Link} from "react-router-dom";


const ActorsCard = ({id}) => {
    const [actors,setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res) => setActors(res.data.cast))
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    useEffect(() => {
        getActors(API__KEY)
    },[])
    console.log(actors)


    return (
        <div id="actor">
           <div className="container">
               <h1>В главных ролях</h1>
               <div className="actor">
                   <Slider {...settings}>
                       {
                           actors.map((el) => (
                               <div className="actor--card">
                                   <Link to={`/actors/details/${el.id}`}>
                                       {
                                           el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/> :
                                               <img src={user} width={140} alt="img"/>
                                       }
                                   </Link>
                                   <h3>{el.character}</h3>
                                   <h4>{el.name}</h4>
                               </div>
                           ))
                       }
                   </Slider>
               </div>

           </div>
        </div>
    );
};

export default ActorsCard;

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US