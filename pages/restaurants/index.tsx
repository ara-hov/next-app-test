import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import CustomPagination from "@/components/Pagination";
import CardLarge from "@/components/cards/CardLarge";
import Link from "next/link";
import FilterRestaurants from "@/components/filters/FilterRestaurants";
import { Row, Col } from "antd";

const sort = [
  {
    title: "rating",
    key: "rating",
  },
  {
    title: "around the area",
    key: "area",
  },
];
const showCount = [10, 20, 30];
const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
];
const Restaurants = () => {
  const [filter, setFilter] = useState("date");
  const [countToShow, setCountToShow] = useState(12);
  const hidePrice = true;
  const addToWishList = () => {};
  return (
    <div id="events">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="container">
        <div className="section-heading  section-heading-sortable">
          <h2 className="section-header">Restaurants</h2>
          <div className="section-sort">
            <p className="sort-title">sorting:</p>
            <div className="sort-items">
              {sort.map((el) => (
                <div
                  onClick={() => setFilter(el.key)}
                  className={`sort-item ${el.key === filter ? "active" : ""}`}
                  key={el.key}
                >
                  <span>{el.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Row>
          <Col span={6}>
            <FilterRestaurants />
          </Col>
          <Col span={18}>
            <div className="container card-list restaurant-card-list">
              <div className="card-list-wrapper">
                {arr.slice(0, countToShow).map((el) => (
                  <CardLarge
                    title={
                      <Link href={`/restaurants/title-${el}`}>
                        <a href={`/restaurants/title-${el}`}>
                          Title {el}
                        </a>
                      </Link>
                    }
                    img={"/images/club.png"}
                    addToWishList={addToWishList}
                    hidePrice={hidePrice}
                    cardLayout={true}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div className="pagination">
                <div className="show-count">
                  <p className="show-count-title">show</p>
                  <div className="show-count-items">
                    {showCount.map((el) => (
                      <div
                        onClick={() => setCountToShow(el)}
                        className={`show-count-item ${
                          el === countToShow ? "active" : ""
                        }`}
                        key={el}
                      >
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <CustomPagination
                  currentPage={1}
                  items={120}
                  pageSize={countToShow}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Restaurants;
