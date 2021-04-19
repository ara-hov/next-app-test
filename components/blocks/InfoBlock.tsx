import React, { Component } from "react";
import styles from "../../styles/infoblock.module.css";
import LocationIcon from "../icons/LocationIcon";
import GlobIcon from "../icons/GlobIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SocialIconList from "../auth/components/SocialIconList";
import CommentIcon from "../icons/CommentIcon";
import Qr from "@/icons/qr.svg";
import BellIcon from "../icons/BellIcon";
import CoinIcon from "../icons/CoinIcon";
import CutleryIcon from "../icons/CutleryIcon";
import CutleryActiveIcon from "../icons/CutleryActiveIcon";
const InfoBlock = ({ isRestaurantPage, isClubPage }: any) => {
  return (
    <div className={styles.info_block_container}>
      <div className={styles.info_section}>
        <div className={styles.price_section}>
          <p className={styles.event_price}>
            50<span>$</span>
          </p>
          <div className={styles.panorama_text}>средний чек без алколголя</div>
        </div>
        <div className={styles.info_address}>
          <LocationIcon className={styles.location_icon} />
          <div className={styles.address_text}>
            <span>61JI. Legian, Кута, Индонезия</span>
            <a href="#" className={styles.map_link}>
              Посмотреть на карте
            </a>
          </div>
        </div>
        <div className={styles.info_address}>
          <GlobIcon />
          <div className={styles.address_text}>
            <a href="#" className={styles.map_link}>
              sitename.com
            </a>
          </div>
        </div>
        <div className={`${styles.info_address} ${styles.align_center}`}>
          <PhoneIcon />
          <div className={styles.address_text}>
            <SocialIconList />
            <CommentIcon />
          </div>
        </div>
        <div className={styles.qr_section}>
          <Qr />
          <a href="#" className={styles.map_link}>

            Scan QR-code
          </a>
          {isRestaurantPage && (
            <a href="#" className={styles.booking}>
              Booking
            </a>
          )}
        </div>
        <div>
          <a href="#" className={styles.waiter_btn}>
            <BellIcon />
            Waiter
          </a>
          <a href="#" className={styles.waiter_btn}>
            <CoinIcon />
            Pay
          </a>
        </div>
      </div>
      {isClubPage || isRestaurantPage ? (
        <div className={styles.menu_container}>
          <div className={styles.menu_open}>
            <CutleryActiveIcon />
            <span className={styles.menu_item_active}>Open menu</span>
          </div>
          <div className={styles.menu_full}>
            <CutleryIcon />
            <span className={styles.menu_item_disabled}>Full menu</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoBlock;
