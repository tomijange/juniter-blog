import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import './AppBar.less';


const {  Footer } = Layout;

const AppBar = ({children}) => (
    <>
        <Layout className="main-layout">
            <Header>
                <Layout.Content className="main-content-wrapper">
                    <div className="main-content">
                        {children}
                    </div>
                </Layout.Content>
            </Header>
            
            <Footer style={{ textAlign: 'center' }}>Juniter / Company Consulting Team e.V.</Footer>
        </Layout>
    </>
);

export default AppBar;
