import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../../../router/routes';
import './Filters'


export default function Filters() {
  return (
    <div className={"filters"}>
      <div className="filters-container">
        <h4>Разделы</h4>
        <ul className={"filters__categories"}>
          <li><Link to="/posts/categories/news" className={"filters__categories__items sidebar__items"}>Новости</Link></li>
          <li><Link to="/posts/categories/art" className={"filters__categories__items sidebar__items"}>Арт</Link> </li>
          <li><Link to="/posts/categories/life" className={"filters__categories__items sidebar__items"}>О жизни</Link> </li>
          <li><Link to="/posts/categories/games" className={"filters__categories__items sidebar__items"}>Игры</Link> </li>
          <li><Link to="/posts/categories/movies" className={"filters__categories__items sidebar__items"}>Кино</Link> </li>
          <li><Link to="/posts/categories/books" className={"filters__categories__items sidebar__items"}>Книги</Link> </li>
          <li><Link to="/posts/categories/programming" className={"filters__categories__items sidebar__items"}>Программирование</Link> </li>
          <li><Link to="/posts/categories/sport" className={"filters__categories__items sidebar__items"}>Спорт</Link> </li>
          <li><Link to="/posts/categories/creation" className={"filters__categories__items sidebar__items"}>Творчество</Link> </li>
          <li><Link to="/posts/categories/music" className={"filters__categories__items sidebar__items"}>Музыка</Link> </li>
        </ul>
      </div>
    </div>
  )
}