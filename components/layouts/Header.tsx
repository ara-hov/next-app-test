import React, { useState } from "react";
import { Menu, Drawer, Dropdown, Button } from "antd";
import SearchIcon from '../icons/SearchIcon';
import HeartIcon from '../icons/HeartIcon';
import CartIcon from '../icons/CartIcon';
import UserIcon from '../icons/UserIcon';
import VectorIcon from '../icons/VectorIcon';
import MenuIcon from '../icons/MenuIcon';
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import styles from "@/styles/header.module.css";
import ArrowBlueIcon from "../icons/ArrowBlue";
import { DownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = ({ isDark }) => {
  const location = useRouter();
  const [show, setShow] = useState(false);
  const [locale, setLocale] = useState("en");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const showMobileMenu = () => {
    setShow(true);
  };
  const handleMenuClick = (e) => {
    setLocale(e.key);
    setShow(false);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="en">En</Menu.Item>
      <Menu.Item key="ru">Ru</Menu.Item>
    </Menu>
  );
  return (
    <header className={styles.header + ' ' + (isDark ? styles.header_dark : "")}>
      {location.pathname === "/home" ? (
        <>
          <div className={styles.header_left}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src={"/images/logo.png"}
                  alt="Logo"
                />
              </Link>
            </div>
            <Menu mode="horizontal">
              <Menu.Item key="online">
                <Link href="/online">Online</Link>
              </Menu.Item>
              <Menu.Item key="events">
                <Link href="/events">Events</Link>
              </Menu.Item>
              <Menu.Item key="restaurants">
                <Link href="/restaurants">Restaurants</Link>
              </Menu.Item>
              <Menu.Item key="clubs">
                <Link href="/clubs">Clubs</Link>
              </Menu.Item>
              <Menu.Item key="housing">
                <Link href="/housing">Housing</Link>
              </Menu.Item>
              <Menu.Item key="rent">
                <Link href="/rents">Rent Transport</Link>
              </Menu.Item>
              <Menu.Item key="more">
                <Link href="/more">More...</Link>
              </Menu.Item>
            </Menu>
          </div>

          <div className={styles.header_right}>
            <div className={styles.right_menu}>
              <Menu mode="horizontal">
                <SubMenu
                  key="housing"
                  title={locale}
                  className="locale-dropdown"
                >
                  <Menu.Item key="en" onClick={() => setLocale("en")}>
                    <span className="sub-menu-item">En</span>
                  </Menu.Item>
                  <Menu.Item key="ru" onClick={() => setLocale("ru")}>
                    <span className="sub-menu-item">Ru</span>
                  </Menu.Item>
                </SubMenu>
              </Menu>
              <VectorIcon
                className={`${styles.header__icon} ${styles.vector_icon}`}
              />
              <SearchIcon className={styles.header__icon} />
              <HeartIcon className={styles.header__icon} />
              <CartIcon className={styles.header__icon} />
              <UserIcon
                className={styles.header__icon}
                onClick={() => setLogin(true)}
              />
            </div>
            <div className={styles.menu_icon} onClick={showMobileMenu}>
              <MenuIcon />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={styles.header_left}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src={"/images/logo.png"}
                  alt="Logo"
                />
              </Link>
            </div>
            <Menu mode="horizontal">
              <Menu.Item key="events">
                <Link href="/events">Events</Link>
              </Menu.Item>
              <SubMenu key="housing" title="Housing">
                <Menu.Item key="housing:1">
                  <span className="sub-menu-item">Housing 1</span>
                </Menu.Item>
                <Menu.Item key="housing:2">
                  <span className="sub-menu-item">Housing 1</span>
                </Menu.Item>
                <Menu.Item key="housing:3">
                  <span className="sub-menu-item">Housing 1</span>
                </Menu.Item>
                <Menu.Item key="housing:4">
                  <span className="sub-menu-item">Housing 1</span>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="clubs">
                <Link href="/clubs">Clubs</Link>
              </Menu.Item>

              <SubMenu key="rent" title="Rent Transport">
                <Menu.Item key="rent:1">
                  <span className="sub-menu-item">Rent 1</span>
                </Menu.Item>
                <Menu.Item key="rent:2">
                  <span className="sub-menu-item">Rent 1</span>
                </Menu.Item>
                <Menu.Item key="rent:3">
                  <span className="sub-menu-item">Rent 1</span>
                </Menu.Item>
                <Menu.Item key="rent:4">
                  <span className="sub-menu-item">Rent 1</span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className={styles.header_right}>
            <div className={styles.right_menu}>
              <Menu mode="horizontal">
                <SubMenu
                  key="housing"
                  title={locale}
                  className="locale-dropdown"
                >
                  <Menu.Item key="en" onClick={() => setLocale("en")}>
                    <span className="sub-menu-item">En</span>
                  </Menu.Item>
                  <Menu.Item key="ru" onClick={() => setLocale("ru")}>
                    <span className="sub-menu-item">Ru</span>
                  </Menu.Item>
                </SubMenu>
              </Menu>
              <SearchIcon className={styles.header__icon} />
              <HeartIcon className={styles.header__icon} />
              <CartIcon className={styles.header__icon} />
              <UserIcon
                className={styles.header__icon}
                onClick={() => setLogin(true)}
              />
            </div>
            <div className={styles.menu_icon} onClick={showMobileMenu}>
              <MenuIcon />
            </div>
          </div>
        </>
      )}
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
            <Link href="/events" >
              Events
            </Link>
          </div>
          <div className="mobile-menu-item mobile-menu-item-sub">
            <Link href="/housing" >
              <a href="/housing">
                Housing{" "}
                <span>
                <ArrowBlueIcon />
              </span>
              </a>
            </Link>
            <div className="mobile-menu-sub">
              <div className="mobile-menu-sub-item">
                <Link href="/housing/1" >
                  Housing 1
                </Link>
              </div>
              <div className="mobile-menu-sub-item">
                <Link href="/housing/2" >
                  Housing 2
                </Link>
              </div>
              <div className="mobile-menu-sub-item">
                <Link href="/housing/3" >
                  Housing 3
                </Link>
              </div>
              <div className="mobile-menu-sub-item">
                <Link href="/housing/4" >
                  Housing 4
                </Link>
              </div>
            </div>
          </div>
          <div className="mobile-menu-item">
            <Link href="/restaurants" >
              Restaurants
            </Link>
          </div>
          <div className="mobile-menu-item mobile-menu-item-sub">
            <Link href="/clubs" >
              Clubs
            </Link>
          </div>
          <Dropdown overlay={menu} className="menu-mobile-dropdown">
            <Button>
              {locale} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Drawer>
      <Login opened={login} close={setLogin} changeView={setRegister} />
      <Register opened={register} close={setRegister} changeView={setLogin} />
    </header>
  );
};

export default Header;
