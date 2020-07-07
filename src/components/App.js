import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route exact path="/" component={HomePage}/>
          <Route exact path=" " component={HomePage}/>
          <Route component={NotFound} />
          
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
