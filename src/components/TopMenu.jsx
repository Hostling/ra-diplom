import React from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const TopMenu = (props) => {
  const sections = [
    {
      link: "/",
      name: "Главная",
    },
    {
      link: "/catalog",
      name: "Каталог",
    },
    {
      link: "/about",
      name: "О магазине",
    },
    {
      link: "/contacts",
      name: "Контакты",
    },
  ];
  return (
    <ul className="navbar-nav mr-auto">
      {sections.map((item) => (
        <li className="nav-item" key={nanoid()}>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to={item.link}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TopMenu;
