const initalState = {
    posts: []
}

export default function postReducer(state = initalState, action) {
    switch (action.type) {
        case "ADD_POST": {
            return { ...state, posts: state.posts.concat(action.payload) };
        }
        case "EDIT_POST": {
            const newPost = action.payload;
            return { ...state, posts: state.posts.map(post => post.slug === newPost.slug ? newPost : post) }
        }
      case "DELETE_POST":
        return {...state, posts: state.posts.filter(post => post.slug !== action.payload)}
        default: ;
    }
    return state;
}