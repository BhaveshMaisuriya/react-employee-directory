import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SubEmployee from "./components/SubEmployee";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Layout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/overview/:name">
              <SubEmployee />
            </Route>
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
