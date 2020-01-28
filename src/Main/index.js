import React from "react";
import "./index.less";
import Post from "../Posts/Post";
import { Affix, Empty, Button, Anchor } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const { Link } = Anchor;
const Main = ({ posts, user, history, onDelete}) => {
  return (
    <div className="main" id="main">
      <section className="posts-container">
        {posts.map(post => {
          return (
            <Post
              key={post.slug}
              {...post}
              user={user}
              onEdit={history.push}
              onDelete={onDelete}
            ></Post>
          );
        })}
        {!posts.length && (
          <div className="empty">
            <Empty description={false} />
            <Button
              icon="plus"
              type="primary"
              shape="round"
              size="large"
              onClick={() => history.push("/post/new")}
            >
              Blogeintrag erstellen
            </Button>
          </div>
        )}
      </section>
      {!!posts.length &&
        <Anchor className="affix" offsetTop={58} affix>
          {posts.map(post => {
            return (
              <Link key={post.slug} href={`#${post.slug}`} title={post.title} />
            );
          })}
        </Anchor>}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  onDelete: (slug) => dispatch({type:"DELETE_POST", payload: slug})
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
