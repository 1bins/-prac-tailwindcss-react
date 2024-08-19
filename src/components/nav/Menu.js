import {useNavigate} from "react-router-dom";
import {Icon} from "@iconify/react";
import classNames from "classnames/bind";

import style from './nav.module.scss';
const cx = classNames.bind(style);

const Menu = ({ name, src, idx, onClick, isActive }) => {
  const navigation = useNavigate();
  const handleMenuClick = () => {
    navigation(`/${name !== 'home' ? name : ''}`);
    onClick(idx);
  }

  return(
    <li className={cx('flex items-center cursor-pointer p-3.5 pl-5 rounded-full', {'active': isActive})} onClick={handleMenuClick}>
      <Icon icon={src} width="26" className={cx('icon-size')} style={{color: isActive ? '#fff' : '#77c6cb'}} />
      <p className={cx('menu', 'text-2xl ml-2.5 text-gray-600')}>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
    </li>
  )
}

export default Menu;