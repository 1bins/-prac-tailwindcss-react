import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "components/layout";
import Home from "pages/home";
import Overview from "pages/overview";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="*" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/overview" element={<Overview />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;