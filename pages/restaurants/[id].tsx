import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "../../styles/singleClub.module.css";
import VkIcon from "@/components/icons/VkIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import EventSlider from "@/components/sliders/EventSlider";
import PlayIcon from "@/components/icons/PlayIcon";
import { Card, Rate } from "antd";
import InfoBlock from "@/components/blocks/InfoBlock";
import Icon from "@ant-design/icons";
import Star from "@/icons/star.svg";
import Gallery from "@/components/blocks/Gallery";
import SubmitForm from "@/components/form/SubmitForm";
import ReviewBlock from "@/components/blocks/ReviewBlock";

const { Meta } = Card;

const other = [1, 2, 3, 4];
const breakpoints = {
  1200: {
    slidesPerView: 3.7,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1.3,
    spaceBetween: 10,
  },
};
const SingleRestaurant = () => {
  const isRestaurantPage = true;
  return (
    <div id="events">
      <div className="container">
        <Breadcrumb />
      </div>

      <div className="container">
        <div className={styles.single_club_wrapper}>
          <div className={styles.club_left}>
            <div className={styles.club_info}>
              <h1 className={styles.club_title}>Title 1</h1>
              <div className={styles.club_right}>
                <div className={styles.social_info_block}>
                  <div className={styles.rate}>
                    <span className={styles.rate_btn}>9.3</span>
                    <Rate
                      disabled
                      defaultValue={4}
                      character={<Icon component={Star} />}
                    />
                  </div>
                  <div className={styles.review}>
                    <span>57 reviews</span>
                  </div>
                  <div className={styles.social_item}>
                    <div className={styles.social_icon}>
                      <VkIcon />
                    </div>
                    <p className={styles.social_count}>12</p>
                  </div>
                  <div className={styles.social_item}>
                    <div className={styles.social_icon}>
                      <FacebookIcon />
                    </div>
                    <p className={styles.social_count}>12</p>
                  </div>
                  <div className={styles.social_item}>
                    <div className={styles.social_icon}>
                      <InstagramIcon />
                    </div>
                    <p className={styles.social_count}>12</p>
                  </div>
                </div>
                <div className={styles.play_panorama_wrap}>
                  <PlayIcon />
                  <div className={styles.panorama_text}>
                    Смотреть панораму виллы
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rest_img_block}>
              <Gallery isRestaurantPage={isRestaurantPage} />
              <InfoBlock isRestaurantPage={isRestaurantPage} />
            </div>
          </div>
          <div className={styles.club_right_wrap}></div>
        </div>
        <div className={styles.rest_cont_block}>
          <div className={styles.rest_left}>
            <div className={styles.club_about_wrapper}>
              <h3 className={styles.about_title}>About event</h3>
              <p className={styles.about_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Nulla consequat massa quis enim.
              </p>
            </div>
            <div>
              <h3 className={`${styles.about_title} ${styles.review_title} `}>
                Reviews <span className={styles.normal_text}>56</span>
              </h3>
              <ReviewBlock />
              <SubmitForm isRestaurantPage={isRestaurantPage} />
            </div>
          </div>
          <div className={styles.rest_right}>
            <div className={styles.middle_section}>
              <div className={styles.kitchen_block}>
                <div className={styles.kitchen_title}>Kitchen</div>
                <div className={styles.regular_text}>
                  European, Russian, Eastern European
                </div>
                <div className={styles.social_menu_title}>Special menu</div>
                <div className={styles.regular_text}>
                  Подходит для вегетарианцев, Для веганов, Безглютеновые блюда
                </div>
                <div className={styles.regular_text}>
                  <strong>Время работы:</strong>вт-вс с 22:00 до последнего
                  гостя
                </div>
              </div>
              <div>
                <iframe
                  width="374"
                  height="215"
                  src="https://www.youtube.com/embed/rbMv6o1_3gA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className={styles.video_text}>Web-cam in restaurant</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.club_slider_wrapper}>
          <EventSlider />
        </div>
        <div>
          <h3 className={`${styles.about_title}`}>Restaurants nearby</h3>
          <div className={styles.club_video_wrapper}>
            <EventSlider isRestaurantPage={isRestaurantPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
