import classNames from "classnames/bind";

import style from './home.module.scss';
const cx = classNames.bind(style);

const Home = () => {
  return(
      <section id="home">
        <div className={cx('home-inner')}>
          test
        </div>
      </section>
  )
}

export default Home;
