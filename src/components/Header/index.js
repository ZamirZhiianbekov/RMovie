import React from 'react';
import logo from "../../img/logo.png";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img" width={120} />
                    <div className="header--nav">
                        <NavLink className="header--nav__item" to="/">Home</NavLink>
                        <NavLink className="header--nav__item" to="/popular">Popular</NavLink>
                        <NavLink className="header--nav__item" to="/topRated">TopRated</NavLink>
                    </div>
                    <div className="header--search">
                        <input type="text" placeholder="Поиск..."/>
                        <button>search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;