import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../../../router/routes';
import './Filters'


export default function Filters() {
  return (
    <div className={"filters"}>
      <div className="filters-container">
        <ul className={"filters__general"}>
          <li><Link to={routes.POSTS_ALL_PATH} className={"filters__general_items sidebar__items"}>Свежее</Link> </li>
          <li><a href="#" className={"filters__general_items sidebar__items "}>Популярное</a> </li>
          <li><a href="#" className={"filters__general_items sidebar__items"}>Рекомендуемое</a> </li>
          <li><a href="#" className={"filters__general_items sidebar__items"}>Мои записи</a> </li>
        </ul>
        <h4>Разделы</h4>
        <ul className={"filters__categories"}>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Новости</a></li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Арт</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>О жизни</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Игры</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Кино</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Книги</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Программирование</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Спорт</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Творчество</a> </li>
          <li><a href="#" className={"filters__categories__items sidebar__items"}>Музыка</a> </li>
        </ul>
      </div>
    </div>
  )
}