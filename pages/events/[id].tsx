import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../../styles/single.event.module.css'
import VkIcon from '@/components/icons/VkIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import EventSlider from '@/components/sliders/EventSlider';
import EventCard from '@/components/cards/EventCard';
import PlayIcon from "@/components/icons/PlayIcon";
// import Avatar_1 from "@/icons/sergey.png";
import {Card, Avatar, Row, Col} from "antd";
import InfoBlock from "@/components/blocks/InfoBlock";
const { Meta } = Card;

const other = [1, 2, 3, 4]
const SingleEvent = () => {
  return (
    <div id="events">
      <div className="container">
        <Breadcrumb/>
      </div>
      <div className="container">
        <div className={styles.single_event_wrapper}>
          <div className={styles.event_left}>
            <div className={styles.event_img}>
              <img src={'/images/club.png'} alt=""/>
            </div>
            <div className={styles.event_info}>
              <h1 className={styles.event_title}>Title 1</h1>
              <h3 className={styles.event_participant}>Participant name</h3>
              <div className={styles.event_date}>25 August 12 а.м.</div>
              <div className={styles.event_info_section}>
                <span className={styles.event_text_grey}>Ticket</span>
                <p className={styles.event_price}>50<span>$</span></p>
              </div>
              <div className={styles.event_info_section}>
                <span className={styles.event_text_grey}>Location</span>
                <p className={styles.event_location}>Sky Garden</p>
              </div>
              <div className={styles.event_info_section}>
                <span className={styles.event_text_grey}>Working hours</span>
                <p className={styles.event_location}>9:00 - 01:00</p>
              </div>
            </div>
          </div>
          <div className={styles.event_right_wrap}>
            <div className={styles.event_right}>
              <div className={styles.social_item}>
                <div className={styles.social_icon}>
                  <VkIcon/>
                </div>
                <p className={styles.social_count}>12</p>
              </div>
              <div className={styles.social_item}>
                <div className={styles.social_icon}>
                  <FacebookIcon/>
                </div>
                <p className={styles.social_count}>12</p>
              </div>
              <div className={styles.social_item}>
                <div className={styles.social_icon}>
                  <InstagramIcon/>
                </div>
                <p className={styles.social_count}>12</p>
              </div>
            </div>
            <div className={styles.play_panorama_wrap}>
              <PlayIcon/>
              <div className={styles.panorama_text}>Смотреть панораму виллы</div>
            </div>
            <div>
              <iframe width="374" height="215" src="https://www.youtube.com/embed/rbMv6o1_3gA"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
              <div className={styles.video_text}>Web-cam in event</div>
            </div>
          </div>
        </div>
        <div className={styles.middle_section}>
          <InfoBlock/>
          <div className={styles.chat_section}>
            <div className={styles.chat_head}>
              <div className={styles.chat_title}>Chat</div>
              <div className={styles.joined_text}>Already joined: <span className={styles.joined_count}>12</span></div>
            </div>
            <div className={`${styles.cards_wrap} chat-cards`}>
              <div className="left-row">
                <Row>
                  <Col span = {24}>
                    <Card style={{ width: 234 }} bordered={false}>
                      <Meta
                        avatar={
                          <Avatar src='/icons/sergey.png' size={48}/>
                        }
                        title="Segey Ivanov"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="right-row">
                <Row>
                  <Col span = {24}>
                    <Card style={{ width: 234 }} bordered={false}>
                      <Meta
                        avatar={
                          <Avatar src={'/icons/sergey.png'} size={48}/>
                        }
                        title="Segey Ivanov"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="left-row">
                <Row>
                  <Col span = {24}>
                    <Card style={{ width: 234 }} bordered={false}>
                      <Meta
                        avatar={
                          <Avatar src={'/icons/sergey.png'} size={48}/>
                        }
                        title="Segey Ivanov"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="right-row">
                <Row>
                  <Col span = {24}>
                    <Card style={{ width: 234 }} bordered={false}>
                      <Meta
                        avatar={
                          <Avatar src={'/icons/sergey.png'} size={48}/>
                        }
                        title="Segey Ivanov"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles.chat_footer}>
              <a href="#" className={styles.follow_chat}>Follow</a>
            </div>
          </div>
        </div>
        <div className={styles.event_about_wrapper}>
          <h3 className={styles.about_title}>About event</h3>
          <p className={styles.about_text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
            eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nulla
            consequat massa quis enim.</p>
        </div>
        <div className={styles.event_guest_wrapper}>
          <div className={styles.event_guest_list}>
            <div className={styles.guest_item}>
              <div className={styles.guest_image_round}>
                <img src={'/images/guest.png'} alt=""/>
              </div>
              <p className={styles.guest_name}>
                DJ Ikya Kavrov
              </p>
            </div>
            <div className={styles.guest_item}>
              <div className={styles.guest_image_round}>
                <img src={'/images/guest.png'} alt=""/>
              </div>
              <p className={styles.guest_name}>
                DJ Antonio
              </p>
            </div>
            <div className={styles.guest_item}>
              <div className={styles.guest_image_round}>
                <img src={'/images/guest.png'} alt=""/>
              </div>
              <p className={styles.guest_name}>
                Astero
              </p>
            </div>
            <div className={styles.guest_item}>
              <div className={styles.guest_image_round}>
                <img src={'/images/guest.png'} alt=""/>
              </div>
              <p className={styles.guest_name}>
                DJ Hot Maker
              </p>
            </div>
          </div>
        </div>
        <div className={styles.event_slider_wrapper}>
          <EventSlider/>
        </div>
        <div>
          <h3 className={styles.about_title}>Other event</h3>
          <div className={styles.event_list}>
            {other.map(el => {
              return <EventCard title={`Title ${el}`}
                                img={'/images/club.png'}
                                date={new Date().toLocaleDateString()}
                                key={`event-${el}`}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
