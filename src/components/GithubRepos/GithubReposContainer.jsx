import GithubRepos from "./GithubRepos";
import {connect} from 'react-redux';
import {setReposAC, findReposByNameAC, sortReposByLastCommitAC, sortReposByNameAC, sortReposByStarsCountAC} from "../../redux/github-repos-reducer";
import {githubGetRepos} from "../../redux/actions/github-getRepos";


let mapStateToProps = (state) => {
    return {
        Repos: state.githubPage.githubData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setRepos: () => {
            dispatch(setReposAC(githubGetRepos()));
        },
        findReposByName: (projectName) => {
            dispatch(findReposByNameAC(projectName));
        },
        sortReposByName: () => {
            dispatch(sortReposByNameAC());
        },
        sortReposByLastCommit: () => {
            dispatch(sortReposByLastCommitAC());
        },
        sortReposByStarsCount: () => {
            dispatch(sortReposByStarsCountAC());
        }
    };
}


const GithubReposContainer = connect(mapStateToProps, mapDispatchToProps)(GithubRepos);

export default GithubReposContainer;