import React from "react";
import { Link } from "react-router-dom";

import headShot from "../img/head-shot.jpg";

const NavBar = (props) => (
    <nav>
        <div>
            <div className="logo-container">
                <img className="head-shot" src={headShot} alt="Head Shot" />
                <p>
                    {props.me}, {props.myAge}
                </p>
            </div>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
            <span className="burger-icon"></span>
        </label>

        <ul className="nav-links">
            <li>
                <Link className="nav-link" to="/" activeClassName="active" end>
                    Home
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/About">
                    About
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Skills">
                    Skills
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Experience">
                    Experience
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Services">
                    Services
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Contact">
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
