import { Route, BrowserRouter, Routes } from "react-router-dom";

// ROUTES
import AllProducts from "../Pages/AllProducts";
import OrdersMain from "../Pages/OrdersMain";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/orders" element={<OrdersMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
