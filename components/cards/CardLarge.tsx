import React from "react";
import Icon, { HeartOutlined } from "@ant-design/icons";
import Star from "@/icons/star.svg";
import styles from "../../styles/card.module.css";
import { Rate } from "antd";

const CardLarge = ({ title, img, addToWishList, online, hidePrice, cardLayout,hideWishList,isPlacesPage }: any) => {
  return (
    <div className={`${styles.card_large} ${cardLayout && styles.clubs_card}`}>
      <div className={styles.card_large_img}>
        <img src={img} alt={title} />
          { !hideWishList && <div className={styles.wishlist} onClick={() => addToWishList()}>
              <HeartOutlined style={{color: "#0085FF"}}/>
          </div>}
      </div>
      <div
        className={styles.card_body_wrapper}
        style={{
          border: title === "Tours" && "0",
        }}
      >
        <div className={styles.card_large_body}>
          <div className={styles.card_large_title}>{title}</div>
          <div className={styles.card_large_desc}>
            Lorem ipsum dolor sit amet astefnfka, consectetur adipisicing elit.
          </div>
            {isPlacesPage && <div><a href="#" className={styles.address}>Place address</a></div>}
        </div>
        <div className={styles.card_large_footer}>
          {isPlacesPage ?
              <div className={styles.footer_wrapper}>
                  <div className={styles.footer_left}>
                      <div className={styles.rate}>
                          <span className={styles.rate_btn}>9.3</span>
                          <Rate
                              disabled
                              defaultValue={4}
                              character={<Icon component={Star} />}
                          />
                      </div>
                  </div>

                      <div className={styles.price}>
                          55 <span>$</span>
                      </div>

              </div>
           : online ? (
            <div className={styles.online}>
              <span className={styles.live}></span>
              <div className={styles.joined}>120 already joined</div>
            </div>
          ) :
            <>
              <div className={styles.footer_left}>
                <div className={styles.rate}>
                  <span className={styles.rate_btn}>9.3</span>
                  <Rate
                    disabled
                    defaultValue={4}
                    character={<Icon component={Star} />}
                  />
                </div>
              </div>
                {!hidePrice &&
                <div className={styles.footer_right}>
                    <div className={styles.price}>
                        55 <span>$</span>
                    </div>
                </div>
                }
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
