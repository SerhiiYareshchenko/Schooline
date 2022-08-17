import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';


const Navbar = () => {

    return (
        <nav>
            <div>
                <NavLink to='/profile/:userId'>Profile</NavLink>
            </div>

            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>

            <div>
                <NavLink to='/photos'>Photos</NavLink>
            </div>

            <div>
                <NavLink to='/news'>News</NavLink>
            </div>

            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>

            <div>
                <NavLink to='/users'>Find users</NavLink>
            </div>

            <div>
                <Friends />
            </div>

            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;