import {Icon} from "@iconify/react";
import classNames from "classnames/bind";

import style from './nav.module.scss';
const cx = classNames.bind(style);

const Nav = () => {
  return(
      <div className={cx('nav-inner')}>
        <h2 className={cx('-offscreen')}>메뉴</h2>
        <nav>
          <ul>
            <li>
              <a href="#">
                <Icon icon="mdi:calendar-check"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Nav;