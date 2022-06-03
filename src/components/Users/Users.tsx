import React, {useEffect} from 'react';
import fu from './Users.module.css';
import User from './User/User';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../store/action-creators/users";
import {useActions} from "../../hooks/useActions";


const Users: React.FC = (props) => {

    const {users, isFetching, page, pagesArray} = useTypedSelector(state => state.usersPage)
    const {getUsers, setCurrentPage} = useActions()

    useEffect(() => {
        getUsers(page)
    }, [page])

    if(isFetching){
        return <Preloader />
    }

    return (
        <div>
            <div className={fu.users} >
                {users.map(u => <User key={u._id} id={u._id} photo={u.photo.small} name={u.name} age={u.age}
                                      country={u.country} description={u.description} status={u.status} followed={u.followed}/>)}
            </div>
            <div className={fu.pages}>
                {pagesArray.map((pageNumber, index) => <span
                    key={index}
                    className={page === pageNumber ? fu.currentPage : fu.page}
                    onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</span>)}
            </div>
        </div>
    );
};

export default Users;



