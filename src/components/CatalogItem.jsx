import React, { useState, useEffect } from "react";

const CatalogItem = (props) => {
  const id = props.match.params.id;
  const [good, setGood] = useState({
    images: [],
    sizes: []
  });



  useEffect(() => {
    const loadData = () => {
      fetch(`${process.env.REACT_APP_URL}api/items/${id}`)
        .then((response) => response.json())
        .then((result) => setGood(result));
    };
    loadData();
  },[id]);

  return (
    <section className="catalog-item">
        <h2 className="text-center">{good.title}</h2>
        <div className="row">
            <div className="col-5">
                <img src={good.images[0]}
                    className="img-fluid" alt={good.title} />
            </div>
            <div className="col-7">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>{good.sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{good.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>{good.color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{good.material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{good.season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{good.reason}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <p>Размеры в наличии:
                      {good.sizes.map(item => item.avalible ? <span className="catalog-item-size selected">{item.size}</span> : null)}
                    </p>
                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">1</span>
                            <button className="btn btn-secondary">+</button>
                        </span>
                    </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg">В корзину</button>
            </div>
        </div>
    </section>
  );
};

export default CatalogItem;
