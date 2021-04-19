import React from 'react';
import styles from '../../styles/reviewBlock.module.css'
const ReviewBlock = () => {
        return (
            <>
                <div className={styles.review_row}>
                    <div className={styles.reviewer_avatar}>
                        <img src={'/icons/sergey.png'} alt="Avatar"/>
                        <p className={styles.review_rate}>9.5</p>
                    </div>
                    <div className={styles.reviewer_content}>
                        <h3 className={styles.reviewer_name}>Sergey Ivanov</h3>
                        <p className={styles.review_date}>12.12.12</p>
                        <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis delectus dignissimos dolorem, earum eius eum facere, iure laboriosam maxime natus necessitatibus nisi non nostrum odit optio, possimus reiciendis ut.Deserunt et recusandae rem saepe tempore tenetur? Amet cupiditate laudantium neque nihil pariatur quo velit. A at cupiditate ducimus, eius error facilis ipsum laudantium magnam modi mollitia omnis, perspiciatis repudiandae.</p>
                    </div>
                </div>
                <div className={styles.review_row}>
                    <div className={styles.reviewer_avatar}>
                        <img src={'/icons/sergey.png'} alt="Avatar"/>
                        <p className={styles.review_rate}>9.5</p>
                    </div>
                    <div className={styles.reviewer_content}>
                        <h3 className={styles.reviewer_name}>Sergey Ivanov</h3>
                        <p className={styles.review_date}>12.12.12</p>
                        <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis delectus dignissimos dolorem, earum eius eum facere, iure laboriosam maxime natus necessitatibus nisi non nostrum odit optio, possimus reiciendis ut.Deserunt et recusandae rem saepe tempore tenetur? Amet cupiditate laudantium neque nihil pariatur quo velit. A at cupiditate ducimus, eius error facilis ipsum laudantium magnam modi mollitia omnis, perspiciatis repudiandae.</p>
                    </div>
                </div>
                <div className={styles.review_row}>
                    <div className={styles.reviewer_avatar}>
                        <img src={'/icons/sergey.png'} alt="Avatar"/>
                        <p className={styles.review_rate}>9.5</p>
                    </div>
                    <div className={styles.reviewer_content}>
                        <h3 className={styles.reviewer_name}>Sergey Ivanov</h3>
                        <p className={styles.review_date}>12.12.12</p>
                        <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis delectus dignissimos dolorem, earum eius eum facere, iure laboriosam maxime natus necessitatibus nisi non nostrum odit optio, possimus reiciendis ut.Deserunt et recusandae rem saepe tempore tenetur? Amet cupiditate laudantium neque nihil pariatur quo velit. A at cupiditate ducimus, eius error facilis ipsum laudantium magnam modi mollitia omnis, perspiciatis repudiandae.</p>
                    </div>
                </div>
                <div className={styles.more_review}>
                    <a href="#" className={styles.more_link}>More Review</a>
                </div>
            </>
        );
}

export default ReviewBlock;
