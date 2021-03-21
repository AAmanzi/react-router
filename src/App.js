import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Posts from "./components/Posts";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/add">Post add</Link>
      </nav>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
