import React from 'react';
import us from './User.module.css';
import avatar from './2.jpg';

const User = (props) => {

/*   handleClick() {
    this.setState(props.status => ({
      isToggleOn: !prevState.isToggleOn
    }));
  } */

  return (
    <nav className={us.user}>
      <div className={us.avatar}>
        <img src={props.photo != null ? props.photo : avatar} alt="2" />
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
        {/*   <li>
          {props.age}
        </li> */}
        {/*  <li>
          {props.status}
        </li> */}
        {/*  <li>
          {props.country}
        </li> */}
      </div>

      {/*       <div className={us.description}>
        {props.description}
      </div> */}
    </nav>
  )
}

export default User;