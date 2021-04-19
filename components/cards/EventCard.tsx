import React from 'react';
import {HeartOutlined} from '@ant-design/icons';
import styles from '../../styles/card.module.css'
import Link from 'next/link';

const EventCard = ({img, title, addToWishList, date, isClubPage}: any) => {

    const slug = title.toLowerCase().replace(' ','-')
    return (
        <div className={styles.event_card} style={{maxWidth: isClubPage && "initial" }}>
            <div className={styles.event_card_img}>
                <img src={img} alt={title}/>
                <div className={styles.wishlist} onClick={() => addToWishList()}>
                    <HeartOutlined style={{color: '#0085FF'}}/>
                </div>
            </div>
            <div className={styles.card_small_title}>
                <Link href={`/events/${slug}`}>
                  <a href={`/events/${slug}`}>
                    {title}
                  </a>
                </Link>
            </div>
            <div className={styles.card_small_date}>
                {date}
            </div>
        </div>
    );
};

export default EventCard;
