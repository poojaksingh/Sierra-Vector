import { Route, BrowserRouter, Routes } from "react-router-dom";

// ROUTES
import AllProducts from "../Pages/AllProducts";
import OrdersMain from "../Pages/OrdersMain";
import AllProductsCategory from "../Pages/AllProductsCategory";
import AllProductsInventory from "../Pages/AllProductsInventory";
import CouponsMain from "../Pages/CouponsMain";
import CustomersMain from "../Pages/CustomersMain";
import DashboardMain from "../Pages/DashboardMain";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/orders" element={<OrdersMain />} />
        <Route path="/categories" element={<AllProductsCategory />} />
        <Route path="/inventory" element={<AllProductsInventory />} />
        <Route path="/coupons" element={<CouponsMain />} />
        <Route path="/customer" element={<CustomersMain />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
