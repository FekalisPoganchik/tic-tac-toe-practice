import React from "react";
import {NavLink} from "react-router-dom";

import LogoXO from "../../resources/icon/LogoXO";
import Logout from "../../resources/icon/Logout";
import classes from "./Navbar.module.scss";

const Navbar = () => {
    const setActive = ({isActive}) => (isActive ? classes.active_link : "");

    return (
        <div className={classes.navbar}>
            <LogoXO />

            <div className={classes.links}>
                <NavLink to="/" className={setActive}>
                    <span>Игровое поле</span>
                </NavLink>
                <NavLink to="rating" className={setActive}>
                    <span>Рейтинг</span>
                </NavLink>
                <NavLink to="active_players" className={setActive}>
                    <span>Активные игроки</span>
                </NavLink>
                <NavLink to="game_history" className={setActive}>
                    <span>История игр</span>
                </NavLink>
                <NavLink to="list_of_players" className={setActive}>
                    <span>Список игроков</span>
                </NavLink>
            </div>

            <Logout />
        </div>
    );
};

export default Navbar;
