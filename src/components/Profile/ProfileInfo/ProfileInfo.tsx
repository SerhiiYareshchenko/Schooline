import React from 'react';
import pi from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props: any) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={pi.profile}>
            <div className={pi.avatar}>
                <img src={props.profile.photo} alt={'1'}/>
            </div>
            <div className={pi.profileInfo}>
                <ul>
                    {props.profile.name}
                </ul>
                <li>
                    {props.profile.age}
                </li>
                <li>
                    {props.profile.status}
                </li>
                <li>
                    {props.profile.country}
                </li>
                <li>
                    {props.profile.followed ? 'follow' : 'unfollow'}
                </li>
            </div>
            <div className={pi.description}>
                {props.profile.description}
            </div>
        </div>
    )
}
export default ProfileInfo;