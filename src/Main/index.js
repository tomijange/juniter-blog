import React from 'react';
import './index.less';
import Post from '../Posts/Post';
import { Affix, Row } from 'antd';

const Main = () => (
    <div className="main" id="main">
        <section className="posts-container">
            <Post></Post>
            <Post></Post>
            <Post></Post>

        </section>
        <Affix className="affix" offsetTop={58}>
            <div>
                
            </div>
        </Affix>
    </div>
);

export default Main;
