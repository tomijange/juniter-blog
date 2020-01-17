import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import './AppBar.less';


const {  Footer } = Layout;

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
