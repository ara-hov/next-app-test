import React from 'react';
import {HeartOutlined} from '@ant-design/icons';
import styles from '../../styles/card.module.css';

const CardCar = ({title,img,addToWishList,price}) => {
    return (
        <div className={styles.card_small}>
            <div className={`${styles.card_small_img} ${styles.card_car_img}`}>
                <img src={img} alt={title}/>
                <div className={styles.wishlist} onClick={() => addToWishList()}>
                    <HeartOutlined style={{color:'#0085FF'}}/>
                </div>
            </div>
            <div className={styles.card_small_title}>
                {title}
            </div>
            <div className={styles.card_small_price}>
                {price} <span className={styles.card_currency}>$</span> <span className={styles.card_unit}>per day</span>
            </div>
        </div>
    );
};

export default CardCar;
