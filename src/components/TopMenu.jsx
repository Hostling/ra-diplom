import React from 'react';
import {nanoid} from 'nanoid';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';

const TopMenu = (props) => {
  const sections = [
    {
      link: "/",
      name: "Главная"
    },
    {
      link: "/catalog",
      name: "Каталог"
    },
    {
      link: "/about",
      name: "О магазине"
    },
    {
      link: "/contacts",
      name: "Контакты"
    },
  ]
  return (
    <ul className="navbar-nav mr-auto">
      <Router>
        {sections.map(item => (
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
      </Router>
    </ul>
  )
}

export default TopMenu
