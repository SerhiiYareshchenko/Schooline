import React from 'react';
import br from './FriendItem.module.css';
import {IUserProfile} from "../../../../models/IUserProfile/IUserProfile";

const FriendItem = (props: IUserProfile) => {

  return (
    <div>
      <nav className={br.friendItem}>
        <div>
          <img src={props.photo} alt="2" />
        </div>
        <div>{props.name}</div>
      </nav>
      {/* {props.photo.addEventListener("click", e => {   тут будет кусок кодаБ для детального отображения информации о друге при нажатии на фото друга
        <div className={br.friendDetail}>
          <div>
            <img src={props.photo} alt="2" />
          </div>
          <div>
            {props.name}
          </div>
          <div>
            {props.age}
          </div>
          <div>
            {props.status}
          </div>
          <div>
            {props.country}
          </div>
           <div>
            {props.description}
          </div>
        </div>
      })} */}
    </div>
  )
}

export default FriendItem;