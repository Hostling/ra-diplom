import React from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const FooterMenu = (props) => {
  const sections = [
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
    <div className="col">
      <section>
        <h5>Информация</h5>
        <ul className="nav flex-column">
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
      </section>
    </div>
  );
};

export default FooterMenu;
