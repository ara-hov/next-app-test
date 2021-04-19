import React, {useState} from 'react';
import {Menu, Drawer, Dropdown, Button} from 'antd';
import SearchIcon from '@/ui-kit/icons/search-icon';
import HeartIcon from '@/ui-kit/icons/heart-icon';
import CartIcon from '@/ui-kit/icons/cart-icon';
import UserIcon from '@/ui-kit/icons/user-icon';
import MenuIcon from '@/ui-kit/icons/menu-icon';
import Link from 'next/link';
import Login from '@/components/auth/login';
import Register from '@/components/auth/register';
import styles from '@/styles/header.module.css';
import ArrowBlueIcon from '@/ui-kit/icons/arrow-blue';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

const {SubMenu} = Menu;

const Header = ({isDark}) => {
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [locale, setLocale] = useState(router.locale);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const showMobileMenu = () => {
        setShow(true)
    }
    const handleMenuClick = (e) => {
        setLocale(e.key)
        setShow(false)
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="en" >
                En
            </Menu.Item>
            <Menu.Item key="ru" >
                Ru
            </Menu.Item>
        </Menu>
    );
    return (
        <header className={styles.header_dark}>
            <div className={styles.header_left}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo"/>
                    </Link>
                </div>
                <Menu mode="horizontal" className="ant-menu-dark">
                    <Menu.Item key="horizontal_events" className="main-item-menu">
                        <Link href="/admin/events">Events</Link>
                    </Menu.Item>
                    <SubMenu key="header_housing" title="Housing">
                        <Menu.Item key="housing:1"><span className="sub-menu-item">Housing 1</span></Menu.Item>
                        <Menu.Item key="housing:2"><span className="sub-menu-item">Housing 2</span></Menu.Item>
                        <Menu.Item key="housing:3"><span className="sub-menu-item">Housing 3</span></Menu.Item>
                        <Menu.Item key="housing:4"><span className="sub-menu-item">Housing 4</span></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="horizontal_clubs" className="main-item-menu">
                        <Link href="/clubs">Clubs</Link>
                    </Menu.Item>
                    <SubMenu key="header_rent_transport" title="Rent transport">
                        <Menu.Item key="header_rent_transport:1">
                            <span className="sub-menu-item">Rent transport 1</span>
                        </Menu.Item>
                        <Menu.Item key="header_rent_transport:2">
                            <span className="sub-menu-item">Rent transport 2</span>
                        </Menu.Item>
                        <Menu.Item key="header_rent_transport:3">
                            <span className="sub-menu-item">Rent transport 3</span>
                        </Menu.Item>
                        <Menu.Item key="header_rent_transport:4">
                            <span className="sub-menu-item">Rent transport 4</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
            <div className={styles.header_right}>
                <div className={styles.right_menu}>
                    <Menu mode="horizontal" className="ant-menu-dark">
                        <SubMenu key="housing" title={locale} className="locale-dropdown">
                            <Menu.Item key="en" onClick={() => setLocale('en')}>
                                <Link href="/" locale={"en"}>
                                    <span className="sub-menu-item">En</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="ru" onClick={() => setLocale('ru')}>
                                <Link href="/" locale={"ru"}>
                                    <span className="sub-menu-item">Ru</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                    <SearchIcon className={styles.header__icon}/>
                    <HeartIcon className={styles.header__icon}/>
                    <CartIcon className={styles.header__icon}/>
                    <UserIcon color={"white"} className={styles.header__icon} onClick={() => setLogin(true)}/>
                </div>
                <div className={styles.menu_icon} onClick={showMobileMenu}>
                    <MenuIcon/>
                </div>
            </div>
            <Drawer
                title=""
                placement="right"
                closable={true}
                onClose={() => setShow(false)}
                visible={show}
                className="mobile-menu"
            >
                <div className="mobile-menu-list">
                    <div className="mobile-menu-item">
                        <Link href="/admin/events">Events</Link>
                    </div>
                    <div className="mobile-menu-item mobile-menu-item-sub">
                        <Link href="/housing"><a>Housing <span><ArrowBlueIcon/></span></a></Link>
                        <div className="mobile-menu-sub">
                            <div className="mobile-menu-sub-item">
                                <Link href="/housing/1">Housing 1</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/housing/2">Housing 2</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/housing/3">Housing 3</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/housing/4">Housing 4</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-item mobile-menu-item-sub">
                        <Link href="/clubs">Clubs</Link>
                    </div>
                    <div className="mobile-menu-item mobile-menu-item-sub">
                        <Link href="/rent_transport"><a>Rent transport <span><ArrowBlueIcon/></span></a></Link>
                        <div className="mobile-menu-sub">
                            <div className="mobile-menu-sub-item">
                                <Link href="/rent_transport/1">Rent transport 1</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/rent_transport/2">Rent transport 2</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/rent_transport/3">Rent transport 3</Link>
                            </div>
                            <div className="mobile-menu-sub-item">
                                <Link href="/rent_transport/4">Rent transport 3</Link>
                            </div>
                        </div>
                    </div>
                    <Dropdown overlay={menu} className="menu-mobile-dropdown">
                        <Button>
                            {locale}<DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Drawer>
            <Login opened={login} close={setLogin} changeView={setRegister}/>
            <Register opened={register} close={setRegister} changeView={setLogin}/>
        </header>
    );
};

export default Header;
