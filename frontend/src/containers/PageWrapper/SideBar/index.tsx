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
          <li><Link to="#" className={"filters__general_items sidebar__items "}>Популярное</Link> </li>
          <li><Link to="#" className={"filters__general_items sidebar__items"}>Рекомендуемое</Link> </li>
          <li><Link to="#" className={"filters__general_items sidebar__items"}>Мои записи</Link> </li>
        </ul>
        <h4>Разделы</h4>
        <ul className={"filters__categories"}>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Новости</Link></li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Арт</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>О жизни</Link> </li>
          <li><Link to="/posts/categories/games" className={"filters__categories__items sidebar__items"}>Игры</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Кино</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Книги</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Программирование</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Спорт</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Творчество</Link> </li>
          <li><Link to="#" className={"filters__categories__items sidebar__items"}>Музыка</Link> </li>
        </ul>
      </div>
    </div>
  )
}