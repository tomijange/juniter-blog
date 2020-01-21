import React from 'react';
import { PageHeader, Button } from 'antd';
import './Post.less';
import classnames from 'classnames';
import CustomEditor from './Common/Editor';
import ReadOnlyEditor from './Common/ReadOnlyEditor';

function Content({ children }) {
    return (
        <div className="post-content">
            {children}
        </div>
    );
}


export default function Post(props) {
    const { content, title, slug, subTitle, user, className, onUpdateContent, edit, onEdit } = props;
    const { avatarUrl } = user || {};

    return (
        <article className={classnames("post", className)}>
            <PageHeader
                className="page-header"
                ghost={false}
                title={title}
                subTitle={subTitle}
                extra={
                    onEdit &&
                    <Button icon="edit" onClick={() => onEdit(`/post/${slug}`)}>
                        Editieren
                    </Button>
                }
                avatar={{ src: avatarUrl }}
            >
                <Content>
                    {!edit ? <ReadOnlyEditor content={content} /> : <CustomEditor onChange={onUpdateContent} content={content} />}
                </Content>

            </PageHeader>
        </article>
    );
}