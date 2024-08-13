import {useState} from "react";
import classNames from "classnames/bind";

const Layout = () => {
  // ** aspect-ratio
  const [aspectRatio, setAspectRatio] = useState('');
  const getAspectRatioName = (e) => setAspectRatio(e.target.name);

  return(
      <section id="layout" className="flex justify-center">
        <article>
          <h4 className="text-4xl">Aspect Ratio</h4>
          <div className={classNames('bg-blue-500', 'hover:bg-blue-300', aspectRatio)} style={{'width': '100px'}}></div>
          <ul className="button-list">
            <li>
              <button type="button" name="aspect-auto" onClick={getAspectRatioName}>aspect-auto</button>
            </li>
            <li>
              <button type="button" name="aspect-square" onClick={getAspectRatioName}>aspect-square</button>
            </li>
            <li>
              <button type="button" name="aspect-video" onClick={getAspectRatioName}>aspect-video</button>
            </li>
          </ul>
        </article>
      </section>
  )
}

export default Layout;