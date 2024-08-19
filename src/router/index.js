import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "components/layout";
import Home from "pages/home";
import Task from "pages/task";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/task" element={<Task />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;