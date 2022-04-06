import React from 'react';
import br from './FriendItem.module.css';

const FriendItem = (props) => {

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
            {props.meritalStatus}
          </div>
          <div>
            {props.country}
          </div>
        </div>
      })} */}
    </div>
  )
}

export default FriendItem;