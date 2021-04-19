import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import EventCard from '@/components/cards/EventCard';
import CustomPagination from '@/components/Pagination';

const sort = [
  {
    title: 'date',
    key: 'date'
  },
  {
    title: 'around the area',
    key: 'area'
  },
  {
    title: 'night',
    key: 'night'
  }
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
  22
];
const Events = () => {
  const [filter, setFilter] = useState('date');
  const [countToShow, setCountToShow] = useState(10);
  const addToWishList = () => {};
  return (
    <div id="events">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="section-heading container section-heading-sortable">
        <h2 className="section-header">Events</h2>

        <div className="section-sort">
          <p className="sort-title">sorting:</p>
          <div className="sort-items">
            {sort.map((el) => (
              <div
                onClick={() => setFilter(el.key)}
                className={`sort-item ${el.key === filter ? 'active' : ''}`}
                key={el.key}
              >
                <span>{el.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container card-list">
        <div className="card-list-wrapper">
          {arr.slice(0, countToShow).map((el) => (
            <EventCard
              title={`Title ${el}`}
              img={'/images/club.png'}
              date={new Date().toLocaleDateString()}
              addToWishList={addToWishList}
              key={`event-${el}`}
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
                    el === countToShow ? 'active' : ''
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
    </div>
  );
};

export default Events;
