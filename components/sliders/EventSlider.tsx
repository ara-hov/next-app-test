import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import EventCard from "../cards/EventCard";
import VideoCard from "../cards/VideoCard";
import Link from "next/link";
import CardLarge from "../cards/CardLarge";


const arr = [1, 2, 3, 4, 5];
const EventSlider = ({isClubPage, videoSource, isRestaurantPage }: any) => {
    const breakpoints = {
        1200: {
            slidesPerView: isClubPage || isRestaurantPage ? 4 : 3,
            spaceBetween: videoSource ? 24 :30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
    const [sw,setSw] = useState(null);
    SwiperCore.use([Autoplay, Navigation, Pagination]);

    return (
        <>
            <Swiper
                navigation
                pagination={{clickable: true}}
                /* autoplay={{delay: 5000}}*/
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    if (!sw){
                        console.log(swiper,'if');
                        setSw(swiper)
                    }
                    console.log(swiper)
                }}
                breakpoints={breakpoints}
            >
                {arr.map(el => <SwiperSlide key={el}>
                    {
                        isClubPage  ? <div className="event-slider-item">
                                <EventCard title={`Title ${el}`}
                                           img={'/images/club.png'}
                                           date={new Date().toLocaleDateString()}
                                           key={`event-${el}`}
                                           isClubPage={isClubPage}
                                />
                            </div>
                            : isRestaurantPage ? <CardLarge
                        title={
                          <Link href={`/restaurants/title-${el}`}>
                            <a href={`/restaurants/title-${el}`}>
                              Title {el}
                            </a>
                          </Link>}
                        img={"/images/club.png"}
                        hidePrice={true}
                        hideWishList={true}
                        /> :
                                videoSource ?
                                    <div className="event-slider-item">
                                       <VideoCard img={'/images/club.png'} title="Title "/>
                                    </div>
                                    :
                                    <div className="event-slider-item">
                                        <img src={'/images/villa.png'} alt=""/>
                                    </div>
                    }
                </SwiperSlide>)}
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-custom" onClick={()=> {
                console.log(sw)
                sw.navigation.$prevEl.trigger('click')
            }}></div>
            <div className="swiper-button-next swiper-button-next-custom" onClick={()=> {
                console.log(sw)
                sw.navigation.$nextEl.trigger('click')
            }}></div>
        </>
    );
};

export default EventSlider;
