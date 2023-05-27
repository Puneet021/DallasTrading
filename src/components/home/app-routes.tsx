import { Component, ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../modules/home-page/home-page";
import ProductsCategoryList from "../../modules/products-category-list/products-category-list";
import ProductList from "../../modules/product-list/product-list";
import ProductDetails from "../../modules/product-details/product-details";
import AboutPage from "../../modules/about-page/about-page";

interface ICustomRoute {
  id: number;
  path: string;
  element: ReactNode;
}

class AppRoutes extends Component {
  // List of all elements or modules in the web app
  // Define all module paths in this list so next time when we need to add one more module
  // all we need to do is to add one more element in this list
  routeList: Array<ICustomRoute> = [
    { id: 0, path: "", element: <Navigate to="home" replace /> },
    { id: 1, path: "/home", element: <HomePage /> },
    { id: 2, path: "/our-products", element: <ProductsCategoryList /> },
    {
      id: 2,
      path: "/our-products/:productCategoryId",
      element: <ProductList />,
    },
    {
      id: 2,
      path: "/our-products/:productCategoryId/:productId",
      element: <ProductDetails />,
    },
    {
      id: 3,
      path: "/about",
      element: <AboutPage />,
    },
  ];
  render(): ReactNode {
    return (
      <Routes>
        {/* iterate over the list of routes */}
        {this.routeList.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  }
}

export default AppRoutes;
