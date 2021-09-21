import React from "react";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import AboutUs from "./components/AboutUs/AbourUs";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/add-product",
    main: () => <AddProduct />,
  },
  {
    path: "/about",
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
