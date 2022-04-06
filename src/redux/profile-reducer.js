const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    postsData: [{
        id: 1,
        message: 'Hi, friends',
        likeCount: 11
    },
    {
        id: 2,
        message: 'My best post',
        likeCount: 14
    },
    {
        id: 3,
        message: 'Way of Samurai',
        likeCount: 7
    },
    {
        id: 4,
        message: 'React Native',
        likeCount: 2
    },
    {
        id: 5,
        message: 'JS it\'s cool',
        likeCount: 23
    },
    {
        id: 6,
        message: 'Realy?',
        likeCount: 17
    }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;