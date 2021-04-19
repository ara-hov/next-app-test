import React, { useState } from "react";
import styles from "../../styles/footer.module.css";
import Link from "next/link";
import { Button, Input } from "antd";

const { Search } = Input;

const Footer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.footer_col} `}>
          <div className={styles.footer_left}>
            <div className={styles.footer_logo}>
              <img
                src={"/images/logo.png"}
                alt="Logo"
              />
              <div>
                <p>Double</p>
                <p>bubble</p>
              </div>
            </div>
            <span className={styles.copyright}>
              © Double bubble, 2019, все права защищены
            </span>
          </div>
        </div>
        <div className={styles.footer_col}>
          <Link href="/events">Events</Link>
          <Link href="/housing">Housing</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/clubs">Clubs</Link>
          <Link href="/rent-car">Rent transport</Link>
        </div>
        <div className={styles.footer_col}>
          <Link href="/life">Life on the island</Link>
          <Link href="/bali">Construction in bali</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/job">Job</Link>
        </div>
        <div className={styles.footer_col}>
          <p className={styles.form_label}>Subscribe</p>
          <div className={styles.footer_form}>
            <Input placeholder="Enter Your email" size="large" />
            <Button type="primary" size="large">
              Send
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
