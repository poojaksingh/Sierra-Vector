import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

// ROUTES
import AllProducts from "../Pages/AllProducts";
import AllProductsContainer from "../Container/All Products/AllProductsContainer";
import AllProductsCategory from "../Pages/AllProductsCategory";
import AllProductsInventory from "../Pages/AllProductsInventory";
import OrdersMain from "../Pages/OrdersMain";
function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsContainer />} />
        <Route path="categories" element={<AllProductsCategory />} />
        <Route path="orders" element={<OrdersMain />} />
        <Route path="inventory" element={<AllProductsInventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
