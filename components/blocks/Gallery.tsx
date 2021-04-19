import React, { useState } from "react";
import styles from "../../styles/gallery.module.css";
import SearchIcon from "../icons/SearchIcon";
import {LightgalleryItem, LightgalleryProvider, useLightgallery} from "react-lightgallery";

const GROUP2 = [
    `/images/maskGroup.png`,
    `/images/banner.png`,
    `/images/banner.png`,
    `/images/banner.png`
];
const OpenButtonWithHook = () => {
  const { openGallery } = useLightgallery();
  return (
      <SearchIcon  onClick={() => openGallery("group2")}/>
  );
};


const Gallery = ({isRestaurantPage}) => {
    const [selectedImg, setSelectedImg] = useState("/images/maskGroup.png")

    return (
      <div className={`${isRestaurantPage ? styles.gallery_bottom : styles.gallery_wrapper}`}>
        <div className={styles.main_img}>
          <img src={selectedImg} alt="" />
          <div className={styles.search_wrapper}>
            <LightgalleryProvider>
              <OpenButtonWithHook />
              {GROUP2.map((p, idx) => (
                  <LightgalleryItem group="group2" src={p} />
              ))}
            </LightgalleryProvider>
          </div>
        </div>
        <div className={styles.secondary_img}>
          <div onClick={() => setSelectedImg("/images/banner.png")}>
            <img src={"/images/banner.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
          <div  onClick={() => setSelectedImg("/images/seaClub.png")}>
            <img src={"/images/seaClub.png"} alt="" />
          </div>
        </div>
      </div>
    );

}

export default Gallery;
