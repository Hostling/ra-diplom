import React from 'react';
import SalesHit from './SalesHit';

const Main = (props) => {
  return (
    <>
    <SalesHit />
    <section className="catalog">
        <h2 className="text-center">Каталог</h2>

        <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </section>
    </>
  )
}

export default Main
