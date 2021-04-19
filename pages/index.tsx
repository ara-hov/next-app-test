import Container from '@/ui-kit/container'
import Breadcrumb from "@/ui-kit/breadcrumb";
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Globe = dynamic(
  () => import('react-globe.gl'),
  { ssr: false }
)
import styles from '@/styles/main.module.css'
import React, { useEffect, useState, useRef, useMemo } from "react";
import Loader from "@/components/Loader";

import connections from "../data/connection";
import { Select } from "antd";

const { Option } = Select;

export default function Home() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [selected, setSelected] = useState(null);
  const [address, setAddress] = useState({ country: "", city: "" });
  const [loading, setLoading] = useState(true);
  const globeRef = useRef(null);
  const [country, setCountry] = useState("");
  useEffect(() => {
    setLoading(true);
    if (navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        )
          .then((response) => response.json())
          .then((responseJson) => {
            // FIXME: поставил по умолчанию Москву, если не удаётся получить с гугла данные
            const data = responseJson.results.length > 0 ? responseJson.results[0].address_components : [];
            let city = "Moscow";
            let country = "Russia";
            for (var i = 0; i < data.length; i++) {
              if (data[i].types.includes("country")) {
                country = data[i].long_name;
              }
              if (data[i].types.length === 2) {
                if (data[i].types.includes("locality")) {
                  city = data[i].long_name;
                }
              }
            }
            setAddress({ country, city });
          })
          .catch((error) => {
            console.error(error);
          });
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (location.lat && location.lon && address.city && address.country) {
      setLoading(false);
    }
  }, [location, address]);
  useEffect(() => {
    if (!loading) {
      // globeRef.current.pointOfView({ lat: location.lat, lng: location.lon });
    }
  }, [loading]);
  const handlePoint = (info) => {
    setCountry(info.country)
    setSelected({
      city: info.city,
      country: info.country,
      lat: info.lat,
      lon: info.lon,
    });
  };
  // const memoMap = useMemo(
  //   () => (
  //     <Globe
  //       ref={globeRef}
  //       labelsData={[{ city: "You're here", ...location }]}
  //       labelLat={(d) => d.lat}
  //       labelLng={(d) => d.lon}
  //       labelDotRadius={Math.sqrt(1)}
  //       labelSize={Math.sqrt(5)}
  //       labelText={(d) => d.city}
  //       labelResolution={2}
  //       globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  //       backgroundImageUrl={"/images/main.png"}
  //       pointsData={connections}
  //       pointLat={(p) => p.lat}
  //       pointLng={(p) => p.lon}
  //       pointLabel={(p) => p.city}
  //       pointRadius={1}
  //       pointAltitude={0}
  //       pointColor={() => "#EB5757"}
  //       onPointClick={(point) => handlePoint(point)}
  //       arcsData={connections}
  //       arcStartLat={location.lat}
  //       arcStartLng={location.lon}
  //       arcEndLat={(d) => d.lat + 1}
  //       arcEndLng={(d) => d.lon + 1}
  //       arcDashLength={1}
  //       arcDashGap={() => Math.random()}
  //       arcDashAnimateTime={3000}
  //       arcDashInitialGap={() => Math.random()}
  //       arcStroke={null}
  //       arcColor={() => "rgba(235,87,87,0.64)"}
  //     />
  //   ),
  //   [loading]
  // );
  return (
    <>
      {loading ? (
        <Loader load={loading} />
      ) : (
        <div
          className={styles.main}
          /*style={{backgroundImage: `url(${'/images/main.png'})`}}*/
        >
          <div className={`${styles.main_wrapper} `}>
            <div className={styles.main_top}>
              <div className={styles.main_logo}>
                <img
                  src={"/images/logo-big.png"}
                  alt="Logo"
                />
              </div>

              <h1 className={styles.main_title}>
                Global community in one platform
              </h1>
            </div>
            <Globe
              ref={globeRef}
              labelsData={[{ city: "You're here", ...location }]}
              labelLat={(d: any) => d.lat}
              labelLng={(d: any) => d.lon}
              labelDotRadius={Math.sqrt(1)}
              labelSize={Math.sqrt(5)}
              labelText={(d: any) => d.city}
              labelResolution={2}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl={"/images/main.png"}
              pointsData={connections}
              pointLat={(p: any) => p.lat}
              pointLng={(p: any) => p.lon}
              pointLabel={(p: any) => p.city}
              pointRadius={1}
              pointAltitude={0}
              pointColor={() => "#EB5757"}
              onPointClick={(point) => handlePoint(point)}
              arcsData={connections}
              arcStartLat={location.lat}
              arcStartLng={location.lon}
              arcEndLat={(d: any) => d.lat + 1}
              arcEndLng={(d: any) => d.lon + 1}
              arcDashLength={1}
              arcDashGap={() => Math.random()}
              arcDashAnimateTime={3000}
              arcDashInitialGap={() => Math.random()}
              arcStroke={null}
              arcColor={() => "rgba(235,87,87,0.64)"}
            />
            <div className={styles.main_bottom}>
              <div className={styles.main_location}>
                <p className={styles.location}>
                  Country:
                  <Select
                    showArrow
                    value={selected?.country}
                    placeholder="Select country"
                    onChange={(val)=>{
                      setCountry(val)
                      const  temp = connections.find((el) => el.country === val)
                      setSelected({...temp, country: val});

                    }}
                    className="glob-select"
                  >
                    {connections.map((el, idx) => {
                      return (
                        <Option value={el.country} key={idx}>
                          {el.country}
                        </Option>
                      );
                    })}
                  </Select>
                </p>
                <p className={styles.location}>
                  City:
                  <Select
                    showArrow
                    value={selected?.city}
                    placeholder="Select city"
                    onChange={(val)=>{
                      const  temp = connections.find((el) => el.city === val)
                      setSelected({...temp, country: country});

                    }}
                    className="glob-select"
                  >
                    {connections.map((el, idx) => {
                      if( country === el.country ) {
                        return (
                          <Option value={el.city} key={idx}>
                            {el.city}
                          </Option>
                        );
                      }

                    })}
                  </Select>
                </p>
              </div>
              <Link href="/home">
                <a href="/home" className={styles.main_btn}>Lets go!</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
