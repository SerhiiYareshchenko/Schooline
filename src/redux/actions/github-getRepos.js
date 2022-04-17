import axios from "axios";

export const githubGetRepos = (searchQuery = "stars:%3E1") => {
    axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        .then(response => {
            return response.data
        })
}
