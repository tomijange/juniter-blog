import React from 'react';

import './Header.less';
import { Menu, Icon, Avatar, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;




function Header({ children }) {
    const location = useLocation();

    const isSmall = useSelector(state => state.browser.lessThan.medium);
    const avatarUrl = useSelector(state => state.user.avatarUrl);

    const ItemGroup = isSmall ? Menu.ItemGroup : SubMenu;

    const links = [
        <Menu.Item key="/post">
            <Link to="/post">
                <Icon type="edit" />
                Post editieren
            </Link>
        </Menu.Item>,
        <ItemGroup key={0} title={<span><Icon type="twitter" /> Social</span>}>
            <Menu.Item key="link3"><Link to="/link3"><Icon type="twitter" />Link3</Link></Menu.Item>
            <Menu.Item key="link4"><Link to="/link4"><Icon type="instagram" />Link4</Link></Menu.Item>
        </ItemGroup>,
        <Menu.Item key="/github">
            <a href="https://github.com/tomijange/juniter-blog/" target="_blank" rel="noopener noreferrer">
                <Icon type="github" />
                GitHub
            </a>
        </Menu.Item>,
        <Menu.Item key="json">
            <Link to="/json">
                <Icon type="database" />
                Json
            </Link>
        </Menu.Item>
    ];

    const menu = (
        <Menu mode={'horizontal'} selectedKeys={[location.pathname]}>

            <Menu.Item key="/">
                <Link to="/"><img className="logo" height="48px" src={require("../Common/icons/logo.png")} alt="Juniter"></img></Link>
            </Menu.Item>
            {isSmall ?
                <SubMenu
                    title={
                        <span>
                            <Icon type="menu" />
                        </span>
                    }
                >
                    {links}
                </SubMenu> : links}
        </Menu>
    );

    const avatar = (
        <div className="avatar">
            <Button type="ghost" shape="circle-outline">
                <Avatar icon="user" src={avatarUrl} />
            </Button>
        </div>
    );


    return (
        <>
            <header className={classnames("header")}>
                <div className="container">

                    {avatar}
                    {menu}
                </div>
            </header>
            {children}
        </>
    );
}

export default Header;