import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgePage from "../pages/BadgePage.js";
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
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
          <Route exact path="/badges/:badgeId" component={BadgePage}></Route>
          <Route exact path="/" component={HomePage}/>
          <Route exact path=" " component={HomePage}/>
          <Route component={NotFound} />
          
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
