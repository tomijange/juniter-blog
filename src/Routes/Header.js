import React from 'react';

import './Header.less';
import { Menu, Icon } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;

function Header(props) {
    const location = useLocation();
    return (
        <header className="header">
            <img className="logo" src={require("../Common/icons/logo.png")} alt="Juniter"></img>
            <div className="container">
                <Menu mode="horizontal" selectedKeys={[location.pathname]}>
                    <Menu.Item key="/">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span>
                                <Icon type="setting" />
                                Submenu
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="Source">
                            <Menu.Item key="github"><Link to="/github"><Icon type="github" />Github</Link></Menu.Item>
                            <Menu.Item key="link2"><Link to="link2">Link2</Link></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Social">
                            <Menu.Item key="link3"><Link to="/link3">Link3</Link></Menu.Item>
                            <Menu.Item key="link4"><Link to="/link4">Link4</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        </header>
    );
}

export default Header;