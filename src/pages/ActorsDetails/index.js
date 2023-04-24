import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";
import {useParams} from "react-router-dom";

const ActorsDetails = () => {
    const [actors, setActors] = useState({})
    const {actorsId} = useParams()
    const [profile_path,name,release_date] = actors

    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${key}&language=en-US`)
            .then((res) => setActors(res.data))
    }

    useEffect(() => {
        getActors(API__KEY)
    },[])
    console.log(actors)
    console.log("ID",actorsId)

    return (
        <div className="actorsDetails">
            <div className="container">
                <div className="actorsDetails">
                    {
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                            <div className="">
                                {name}
                                {release_date}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ActorsDetails;