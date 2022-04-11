import * as axios from 'axios';
import React from 'react';
import fu from './Users.module.css';
import User from './User/User';

class Users extends React.Component {
  getUsers = () => {
    console.log('---', 1, this.props.users)
    if (this.props.users.length === 0) {
      axios.get("https://man-just-react-back-end.herokuapp.com/api/users")
        .then(response => {
          console.log(response.data);
          this.props.setUsers(response.data);
        });
    }
  }
  render() {
    console.log('---', 2, this.props.users)
    return <div>
      <div className={fu.users} key="{this.usersElements.id}">
        <button onClick={this.getUsers}>Get users</button>
        {this.props.users.map(u => <User _id={u.id} photo={u.photo.small} name={u.name}  age={u.age}  country={u.country} description={u.description} status={u.status} followed={u.followed} />)}
      </div>
    </div>
  }
}

export default Users;