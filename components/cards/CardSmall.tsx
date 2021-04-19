import React from 'react';
import {HeartOutlined} from '@ant-design/icons';
import styles from '../../styles/card.module.css'

const CardSmall = ({title,img,date,addToWishList}) => {
    return (
        <div className={styles.card_small}>
            <div className={styles.card_small_img}>
                <img src={img} alt={title}/>
                <div className={styles.wishlist} onClick={() => addToWishList()}>
                    <HeartOutlined style={{color:'#0085FF'}}/>
                </div>
            </div>
            <div className={styles.card_small_title}>
                {title}
            </div>
            <div className={styles.card_small_date}>
                {date}
            </div>
        </div>
    );
};

export default CardSmall;
