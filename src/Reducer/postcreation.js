
const initalState = {
    content: null,
    slug: null,
    temporarySlug: null,
    title: null,
};

function getSlug(title) {
    return title && title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}


export default function postCreationReducer(state = initalState, action) {

    switch (action.type) {
        case "START_POST_CREATION": {
            const post = action.payload || {};
            if (state.slug !== post.slug) {
                // start new post creation
                return { ...initalState, temporarySlug: post.slug, ...post, started: true };
            }
            return state;
        }
        case "END_POST_CREATION": {
            return { ...initalState, started: false };
        }
        case "UPDATE_CONTENT": {
            return { ...state, content: action.payload };
        }
        case "UPDATE_TITLE": {
            return {
                ...state,
                title: action.payload,
                temporarySlug: state.slug ? state.slug : getSlug(action.payload)
            };
        }

        default: ;
    }

    return state;
}