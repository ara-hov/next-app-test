import React from "react";
import Icon, { HeartOutlined } from "@ant-design/icons";
import Star  from "@/icons/star.svg";
import styles from "../../styles/videoCard.module.css";
import { Rate } from "antd";

const VideoCard = ({ title, img }) => {
    return (
        <div className={`${styles.card_large}`}>
            <div className={styles.card_large_img}>
                <img src={img} alt={title} />
            </div>
            <div
                className={styles.card_body_wrapper}
                style={{
                    border: title === "Tours" && "0",
                }}
            >
                <div className={styles.card_large_body}>
                    <div className={styles.card_large_title}>{title}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
