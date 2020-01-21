import React from 'react';
import { PageHeader } from 'antd';
import './Post.less';
import classnames from 'classnames';

function Content({ children }) {
    return (
        <div className="post-content">
            {children}
        </div>
    );
}


export default function Post(props) {
    const { content, title, subTitle, user, className } = props;
    const { avatarUrl } = user || {};

    return (
        <article className={classnames("post", className)}>
            <PageHeader
                className="page-header"
                ghost={false}
                title={title}
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                    width: '100%',
                }}
                subTitle={subTitle}
                avatar={{ src: avatarUrl }}
            >
                <Content>
                    {content}
                </Content>

            </PageHeader>
        </article>
    );
}