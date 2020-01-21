import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostCreation from './PostCreation';

function EditPage({ post, match, startPostCreation, started }) {
    let { slug } = match.params;

    // start post creation depending on post or type
    React.useEffect(() => {
        startPostCreation(post);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug, startPostCreation]);

    if (!started) {
        return null;
    }

    return <PostCreation post={post} />;
}

const findPost = (posts, match) => {
    const slug = match.params.slug;
    return posts.find(post => post.slug === slug);
};

const mapStateToProps = (state, props) => ({
    post: findPost(state.posts.posts, props.match),
    started: state.postcreation.started,
});

const mapDispatchToProps = dispatch => ({
    startPostCreation: post => dispatch({ type: 'START_POST_CREATION', payload: post }),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EditPage)
);