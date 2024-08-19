import {Outlet} from "react-router-dom";
import Nav from "components/nav";
import classNames from "classnames/bind";

import style from './layout.module.scss'
const cx = classNames.bind(style);

const Layout = () => {
  return(
      <main className={cx('flex items-center justify-center')}>
        <div className={cx('main', 'flex bg-white rounded-3xl shadow-2xl shadow-gray-400')}>
          <Nav/>
          <div className={cx('main-content')}>
            <Outlet/>
          </div>
        </div>
      </main>
  )
}

export default Layout;