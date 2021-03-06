import React from "react";
import { Link } from "react-router-dom";

const CatalogPage = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <div className="col-4" key={item.id}>
          <div className="card catalog-item-card">
            <img
              src={item.images[0]}
              className="card-img-top img-fluid"
              alt={item.title}
            />
            <div className="card-body">
              <p className="card-text">{item.title}</p>
              <p className="card-text">{item.price} руб.</p>
              <Link
                to={`/products/${item.id}`}
                className="btn btn-outline-primary"
              >
                Заказать
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatalogPage;
