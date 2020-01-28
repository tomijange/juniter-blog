import React from "react";
import { Form, Input, Button } from "antd";
import "./PostCreation.less";
import Post from "../Post";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function PostCreation({
  content,
  isNew,
  title,
  slug,
  onUpdateContent,
  onUpdateTitle,
  addPost,
  editPost,
  endPostCreation,
  history
}) {
  function onSave() {
    const post = { content, title, slug };
    isNew ? addPost(post) : editPost(post);
    endPostCreation();
    history.goBack();
  }

  function onAbort() {
    endPostCreation();
    history.goBack();
  }

  return (
    <Form className="post-creation">
      <Post
        className="post"
        title={
          <Input
            style={{ border: "none", font: "inherit", boxShadow: "none" }}
            value={title}
            onChange={e => onUpdateTitle(e.target.value)}
            placeholder="Titel"
          />
        }
        subTitle={
          <Input
            style={{ border: "none", font: "inherit", boxShadow: "none" }}
            placeholder="Subtitel"
          />
        }
        content={content}
        onUpdateContent={onUpdateContent}
        edit
      ></Post>

      <Form.Item>
        <div className="buttons">
          <Button type="default" htmlType="reset" onClick={onAbort}>
            Abbrechen
          </Button>
          <Button type="primary" htmlType="submit" onClick={onSave}>
            Speichern
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

const mapDispatchToProps = dispatch => ({
  onUpdateContent: content =>
    dispatch({ type: "UPDATE_CONTENT", payload: content }),
  onUpdateTitle: title => dispatch({ type: "UPDATE_TITLE", payload: title }),
  addPost: post => dispatch({ type: "ADD_POST", payload: post }),
  editPost: post => dispatch({ type: "EDIT_POST", payload: post }),
  endPostCreation: () => dispatch({ type: "END_POST_CREATION" })
});

const mapStateToProps = state => ({
  content: state.postcreation.content,
  title: state.postcreation.title,
  slug: state.postcreation.slug || state.postcreation.temporarySlug,
  isNew: !state.postcreation.slug
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostCreation));
