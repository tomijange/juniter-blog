import React from "react";
import { PageHeader, Button, Icon, List, Tooltip, Popconfirm } from "antd";
import "./Post.less";
import classnames from "classnames";
import CustomEditor from "./Common/Editor";
import ReadOnlyEditor from "./Common/ReadOnlyEditor";

function Content({ children }) {
  return <div className="post-content">{children}</div>;
}

const Like = ({ type, title, active, count, onLike }) => (
  <span>
    <Tooltip title={title}>
      <Icon
        type={type}
        theme={active ? "filled" : "outlined"}
        onClick={onLike}
      />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: "auto" }}>{count}</span>
  </span>
);

export default function Post(props) {
  const {
    content,
    title,
    slug,
    subTitle,
    user,
    className,
    onUpdateContent,
    edit,
    onEdit,
    onDelete
  } = props;
  const { avatarUrl } = user || {};

  return (
    <article className={classnames("post", className)} id={slug}>
      <PageHeader
        className="page-header"
        ghost={false}
        title={title}
        subTitle={subTitle}
        extra={
          <>
            {onEdit && (
              <Button icon="edit" onClick={() => onEdit(`/post/${slug}`)}>
                Editieren
              </Button>
            )}
            {onDelete && <Popconfirm
              title="Diesen Blogeintrag löschen?"
              okText="Ja"
              cancelText="Nein"
              onConfirm={() => onDelete(slug)}
            >
              <Button icon="delete" shape="circle"></Button>
            </Popconfirm>}
          </>
        }
        avatar={{ src: avatarUrl }}
      >
        <Content>
          {!edit ? (
            <ReadOnlyEditor content={content} />
          ) : (
            <CustomEditor onChange={onUpdateContent} content={content} />
          )}
        </Content>
        <ul className="actions">
          <li>
            <Like active count={1} title="Like" type="like"></Like>
            <em class="split"></em>
          </li>
          <li>
            <Like active count={1} title="Like" type="like"></Like>
            <em class="split"></em>
          </li>
        </ul>
      </PageHeader>
    </article>
  );
}
