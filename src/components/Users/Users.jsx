import * as axios from 'axios';
import React from 'react';
import fu from './Users.module.css';
import User from './User/User';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://man-just-react-back-end.herokuapp.com/api/users?page=${this.props.usersPageData.page}&count=${this.props.usersPageData.count}`)
            .then(response => {
                this.props.setUsers(response.data);
            });
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://man-just-react-back-end.herokuapp.com/api/users?page=${pageNumber}&count=${this.props.usersPageData.count}`)
            .then(response => {
                this.props.setUsers(response.data);
                console.log(response.data)
            });
    }

    render() {
        return <div>
            <div className={fu.users} key="{this.usersElements.id}">
                {this.props.usersPageData.users.map(u => <User _id={u.id} photo={u.photo.small} name={u.name}
                                                               age={u.age}
                                                               country={u.country} description={u.description}
                                                               status={u.status}
                                                               followed={u.followed}/>)}
            </div>
            <div className={fu.pages}>
                {this.props.usersPageData.pagesArray.map((pageNumber, index) => <span
                    key={index}
                    className={this.props.usersPageData.currentPage === pageNumber ? fu.currentPage : fu.page}
                    onClick={() =>  this.setCurrentPage(pageNumber) }>{pageNumber}</span>)}
            </div>
        </div>
    }
}

export default Users;