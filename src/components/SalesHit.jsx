import React, { useState, useEffect } from "react";
import SalesHitItem from './SalesHitItem';

const SalesHit = (props) => {
  const [goods, setGoods] = useState([]);

  const loadGoods = () => {
    fetch(`${process.env.REACT_APP_URL}api/top-sales`)
      .then((response) => response.json())
      .then((result) => setGoods(result));
  };

  useEffect(() => {
    loadGoods();
  }, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {goods.map(item => (
          <SalesHitItem key={item.id} {...item} />
        ))}
      </div>

      {/*
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
          */}
    </section>
  );
};

export default SalesHit;
