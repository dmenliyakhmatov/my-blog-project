import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../../../router/routes';
import './Filters'


export default function Filters() {
  return (
    <div className={"filters"}>
      <div className="filters-container">
        <ul className={"filters__general"}>
          <li><Link to={routes.POSTS_ALL_PATH} className={"filters__general_items"}>Свежее</Link> </li>
          <li><a href="#" className={"filters__general_items"}>Популярное</a> </li>
          <li><a href="#" className={"filters__general_items"}>Рекомендуемое</a> </li>
          <li><a href="#" className={"filters__general_items"}>Мои записи</a> </li>
        </ul>
        <h4>Разделы</h4>
        <ul className={"filters__categories"}>
          <li><a href="#" className={"filters__categories__items"}>Новости</a></li>
          <li><a href="#" className={"filters__categories__items"}>Арт</a> </li>
          <li><a href="#" className={"filters__categories__items"}>О жизни</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Игры</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Кино</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Книги</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Программирование</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Спорт</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Творчество</a> </li>
          <li><a href="#" className={"filters__categories__items"}>Музыка</a> </li>
        </ul>
      </div>
    </div>
  )
}