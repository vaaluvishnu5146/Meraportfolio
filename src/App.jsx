import { Route, Routes } from "react-router";
import DashboardLayout from "./DashboardLayout";
import "./layout.css";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" Component={Products} />
        <Route path="/cart" Component={Cart} />
        <Route path="/settings" Component={Settings} />
      </Routes>
    </DashboardLayout>
  );
}
