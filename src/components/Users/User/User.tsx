import React from 'react';
import us from './User.module.css';
import {NavLink} from "react-router-dom";
import {IUserProfile} from "../../../models/IUserProfile/IUserProfile";
/*import avatar from '';*/

const User = (props: IUserProfile) => {

    /*   handleClick() {
        this.setState(props.status => ({
          isToggleOn: !prevState.isToggleOn
        }));
      } */

    return (
        <nav className={us.user}>
            <div className={us.photo}>
                <NavLink to={'/profile/' + props.id}> <img src={props.photo} alt="2"/> </NavLink>
            </div>
            {/*       <div>
        <button onClick={this.handleClick}>
          {props.isToggleOn ? 'unfollow' : 'follow'}
        </button>
      </div> */}
            <div className={us.profile}>
                <ul>
                    {props.name}
                </ul>
                <li>
                    {props.age}
                </li>
                <li>
                    {props.status}
                </li>
                <li>
                    {props.country}
                </li>
                <li>
                    {props.followed ? 'follow' : 'unfollow'}
                </li>
            </div>
            <div className={us.description}>
                {props.description}
            </div>
        </nav>
    )
}

export default User;