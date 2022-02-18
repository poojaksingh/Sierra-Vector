import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppBar from "../Components/AppBar/AppBar";

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
      <AppBar>
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/orders" element={<OrdersMain />} />
          <Route path="/categories" element={<AllProductsCategory />} />
          <Route path="/inventory" element={<AllProductsInventory />} />
          <Route path="/coupons" element={<CouponsMain />} />
          <Route path="/customer" element={<CustomersMain />} />
        </Routes>
      </AppBar>
    </BrowserRouter>
  );
}

export default ReactRouter;
