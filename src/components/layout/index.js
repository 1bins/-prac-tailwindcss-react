import {Outlet} from "react-router-dom";
import Nav from "components/nav";
import classNames from "classnames/bind";

import style from './layout.module.scss'
const cx = classNames.bind(style);

const Layout = () => {
  return(
      <main>
        <Nav/>
        <div className={cx('main-content')}>
          <Outlet/>
        </div>
      </main>
  )
}

export default Layout;