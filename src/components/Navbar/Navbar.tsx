import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
import n from './Navbar.module.css';


const Navbar = () => {

    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile/:userId' activeClassName={n.activeLink}>Profile</NavLink>
            </div>

            <div className={n.item}>
                <NavLink to='/dialogs' activeClassName={n.activeLink}>Messages</NavLink>
            </div>

            <div className={n.item}>
                <NavLink to='/photos' activeClassName={n.activeLink}>Photos</NavLink>
            </div>

            <div className={n.item}>
                <NavLink to='/news' activeClassName={n.activeLink}>News</NavLink>
            </div>

            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.activeLink}>Music</NavLink>
            </div>

            <div className={n.item}>
                <NavLink to='/users' activeClassName={n.activeLink}>Find users</NavLink>
            </div>

            <div className={n.item}>
                <Friends />
            </div>

            <div className={n.item}>
                <NavLink to='/settings' activeClassName={n.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;