import React from 'react';

import './Header.less';
import { Menu, Icon, Avatar, Layout, Dropdown, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

const { SubMenu } = Menu;

const useHideOnScroll = () => {
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        function onScroll() {
            var currentScrollPos = window.pageYOffset;
            console.log(prevScrollpos > currentScrollPos)
            setHide(prevScrollpos <= currentScrollPos);
            prevScrollpos = currentScrollPos;
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return hide;
}


function Header(props) {
    const location = useLocation();
    const hide = useHideOnScroll();
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
      </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <header className={classnames("header", hide && "hide")}>
            <div className="container">
                <div key={0} className="avatar">
                    <Dropdown overlay={menu}>
                        <Button type="ghost" shape="circle-outline">
                            <Avatar icon="user" />
                        </Button>
                    </Dropdown>
                </div>
                <img className="logo" src={require("../Common/icons/logo.png")} alt="Juniter"></img>
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
                            <Menu.Item key="/github"><a href="https://github.com/tomijange/juniter-blog/" target="_blank" rel="noopener noreferrer"><Icon type="github" />GitHub</a></Menu.Item>
                            <Menu.Item key="/post"><Link to="/post">Post</Link></Menu.Item>
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