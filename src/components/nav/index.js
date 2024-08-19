import classNames from "classnames/bind";

import style from './nav.module.scss';
import Menu from "components/nav/Menu";
import {useState} from "react";
const cx = classNames.bind(style);

const Nav = () => {
  // ** state
  const [clickedItem, setClickedItem] = useState(0);

  // ** variables
  const menuItems = [
    {name: 'home', src: 'fluent:home-20-filled'},
    {name: 'overview', src: 'foundation:graph-pie'},
    {name: 'histories', src: 'fluent:history-16-filled'},
    {name: 'appointments', src: 'fluent:calendar-24-filled'},
    {name: 'settings', src: 'mingcute:settings-6-line'},
  ]

  return(
      <div className={cx('nav-inner')}>
        <h2 className={cx('-offscreen')}>메뉴</h2>
        <nav>
          <ul className={cx('gnb')}>
            {menuItems.map((elem, idx) => (
                <Menu name={elem.name}
                      src={elem.src}
                      idx={idx}
                      isActive = {clickedItem === idx}
                      onClick={setClickedItem}
                      key={idx}/>
            ))}
          </ul>
        </nav>
      </div>
  )
}

export default Nav;