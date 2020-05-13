import React, { useState, useEffect } from "react";
import CatalogPage from "./CatalogPage";

const Catalog = (props) => {
  const [catalogItems, setCatalogItems] = useState([]);
  const [categories, setCategories] = useState({
    active: 0,
    cat: [
      {
        id: 0,
        title: "Все",
      },
    ],
  });

  useEffect(() => {
    const loadCategories = () => {
      fetch(`${process.env.REACT_APP_URL}api/categories`)
        .then((response) => response.json())
        .then((result) =>
          setCategories((prevState) => ({
            active: 0,
            cat: [...prevState.cat, ...result],
          }))
        );
    };
    const loadCatalogItems = () => {
      fetch(`${process.env.REACT_APP_URL}api/items`)
        .then((response) => response.json())
        .then((result) => setCatalogItems(result));
    };
    (async () => {
      await loadCategories();
      await loadCatalogItems();
    })();
  }, []);

  const changeCategory = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    setCategories((prevState) => ({
      active: Number(id),
      cat: [...prevState.cat],
    }));

    fetch(`${process.env.REACT_APP_URL}api/items?categoryId=${id}`)
      .then((response) => response.json())
      .then((result) => setCatalogItems(result));
  };

  const SearchForm = (props) => {
    const [value, setValue] = useState({ value: "" });

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`${process.env.REACT_APP_URL}api/items?q=${value.value}`)
        .then((response) => response.json())
        .then((result) => setCatalogItems(result));
    };
    const handleChange = (e) => {
      setValue({ value: e.target.value });
    };

    return (
      <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control"
          value={value.value}
          onChange={handleChange}
          placeholder="Поиск"
        />
      </form>
    );
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {props.fromLink ? <SearchForm /> : null}

      <ul className="catalog-categories nav justify-content-center">
        {categories.cat.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <a
              className={`nav-link ${
                categories.active === item.id ? "active" : null
              }`}
              data-id={item.id}
              onClick={changeCategory}
              href="/"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="row">
        <CatalogPage items={catalogItems} />
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </section>
  );
};

export default Catalog;
