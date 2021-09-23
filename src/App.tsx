import React from "react";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import AboutUs from "./components/AboutUs/AbourUs";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Redirect to="/shop-admin" /> ,
  },
  {
    path: "/shop-admin",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/shop-admin/add-product",
    exact: true,
    main: () => <AddProduct />,
  },
  {
    path: "/shop-admin/about",
    exact: true,
    main: () => <AboutUs />,
  },
];

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="d-flex align-items-stretch">
          <Sidebar />
          <div className="w-100">
            <div className="content-container">
              <div className="content-page">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
