import React from "react";
import Footer from "./pages/Footer";
import Sidebar from "./components/Sidebar";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Redirect to="/shop-admin" />,
  },
  {
    path: "/shop-admin",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/shop-admin/products",
    exact: true,
    main: () => <Products />,
  },
  {
    path: "/shop-admin/add-product",
    exact: true,
    main: () => <AddProduct />,
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
