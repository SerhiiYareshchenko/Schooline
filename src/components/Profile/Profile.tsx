import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useParams} from "react-router-dom";



const Profile: React.FC = (props) => {

    const {profile, isFetching} = useTypedSelector(state => state.profilePage)
    const {setUserProfile} = useActions()
    const params = useParams()

    useEffect(() => {
        // @ts-ignore
        setUserProfile(params.userId)
    }, [])
    if(!profile || isFetching) {
        return <MyPosts />
    } else {
        return <ProfileInfo profile = {profile} />

    }
};

export default Profile;