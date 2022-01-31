import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

// ROUTES
import AllProducts from "../Pages/AllProducts";
import AllProductsContainer from "../Container/All Products/AllProductsContainer";
import Categories from "../Container/Categories/Categories";
import Inventory from "../Container/Inventory/Inventory";
import Orders from "../Container/Orders/Orders";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
