import React, {useEffect} from 'react';
import g from './GithubRepos.module.css';
import repo from "./Repo/Repo";


const GithubRepos = (props) => {

    useEffect(() => {

    }, [])
    return (
        <div className={g.container}>
            {console.log(props)}
        </div>
    );
};

export default GithubRepos;