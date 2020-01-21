import React from 'react';

import './Header.less';
import { Menu, Icon, Avatar, Layout, Dropdown, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

const useHideOnScroll = () => {
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        function onScroll() {
            var currentScrollPos = window.pageYOffset;
            setHide(prevScrollpos <= currentScrollPos);
            prevScrollpos = currentScrollPos;
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return hide;
}


function Header({ children }) {
    const location = useLocation();

    const isSmall = useSelector(state => state.browser.lessThan.small);
    const avatarUrl = useSelector(state => state.user.avatarUrl);

    const ItemGroup = isSmall ? Menu.ItemGroup : SubMenu;

    const links = [
        <ItemGroup title={
            <span>
                {!isSmall && <Icon type="code" />}
                Source
            </span>
        }>
            <Menu.Item key="/github"><a href="https://github.com/tomijange/juniter-blog/" target="_blank" rel="noopener noreferrer">
                <Icon type="github" />GitHub</a>
            </Menu.Item>
            <Menu.Item key="/post"><Link to="/post">Post</Link></Menu.Item>
        </ItemGroup>,
        <ItemGroup title="Social">
            <Menu.Item key="link3"><Link to="/link3">Link3</Link></Menu.Item>
            <Menu.Item key="link4"><Link to="/link4">Link4</Link></Menu.Item>
        </ItemGroup>
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
                <Avatar icon="user" src={avatarUrl}/>
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