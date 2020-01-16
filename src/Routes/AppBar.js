import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Header from './Header';
import './AppBar.less';
import { Switch, Route } from 'react-router-dom';


const { Content, Footer } = Layout;

const AppBar = ({children}) => (
    <>
        <Layout className="main-layout">
            <Header></Header>
            <section className="main-content-wrapper">
                <div className="main-content">
                    {children}
                </div>
            </section>
            <Footer style={{ textAlign: 'center' }}>Juniter</Footer>
        </Layout>
    </>
);

export default AppBar;
