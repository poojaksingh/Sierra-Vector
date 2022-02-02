import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

// ROUTES
import AllProducts from "../Pages/AllProducts";
import AllProductsContainer from "../Container/All Products/AllProductsContainer";
import AllProductsCategory from "../Pages/AllProductsCategory";
import AllProductsInventory from "../Pages/AllProductsInventory";
import OrdersMain from "../Pages/OrdersMain";
import CustomersMain from "../Pages/CustomersMain";
import CouponsMain from "../Pages/CouponsMain";
function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsContainer />} />
        <Route path="/categories" element={<AllProductsCategory />} />
        <Route path="/orders" element={<OrdersMain />} />
        <Route path="/inventory" element={<AllProductsInventory />} />
        <Route path="/customer" element={<CustomersMain />} />
        <Route path="/coupons" element={<CouponsMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
