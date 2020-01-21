import React from 'react';
import './index.less';
import Post from '../Posts/Post';
import { Affix, Empty } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Main = ({ posts, user, history }) => {
    return (
        <div className="main" id="main">
            <section className="posts-container">
                {posts.map(post => {
                    return <Post key={post.slug} {...post} user={user} onEdit={history.push}></Post>
                })}
                {!posts.length && <Empty description={false} />}

            </section>
            <Affix className="affix" offsetTop={58}>
                <div>

                </div>
            </Affix>
        </div>
    )
};

const mapStateToProps = state => ({
    posts: state.posts.posts,
    user: state.user,
});


export default connect(mapStateToProps)(withRouter(Main));
