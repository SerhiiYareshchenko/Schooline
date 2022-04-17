import axios from "axios";

const SET_REPOS = 'SET_REPOS';
const FIND_REPOS_BY_NAME = 'FIND_PROJECT_BY_NAME';
const SORT_REPOS_BY_NAME = 'SORT_PROJECT_BY_NAME';
const SORT_REPOS_BY_LAST_COMMIT = 'SORT_PROJECT_BY_LAST_COMMIT';
const SORT_REPOS_BY_STARS_COUNT = 'SORT_PROJECT_BY_STARS_COUNT';

let initialState = {
    githubData: []
};

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                githubData: [...state.githubData, ...action.payload.items]
            };
        }
        case FIND_REPOS_BY_NAME: {
            return {

            };
        }
        case SORT_REPOS_BY_NAME: {
            return {

            };
        }
        case SORT_REPOS_BY_LAST_COMMIT: {
            return {

            };
        }
        case SORT_REPOS_BY_STARS_COUNT: {
            return {

            };
        }
        default:
            return state;
    }
}




export const setReposAC = (repos) => ({ type: SET_REPOS, payload: repos });
export const findReposByNameAC = () => ({ type: FIND_REPOS_BY_NAME });
export const sortReposByNameAC = () => ({ type: SORT_REPOS_BY_NAME });
export const sortReposByLastCommitAC = () => ({ type: SORT_REPOS_BY_LAST_COMMIT });
export const sortReposByStarsCountAC = () => ({ type: SORT_REPOS_BY_STARS_COUNT });

export default githubReducer;