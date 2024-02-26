import Proptypes from "prop-types";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="dashboard-layout-container">
      <Navbar />
      <main className="content-area-container">
        <Sidebar />
        <div className="content-container">{children}</div>
      </main>
    </section>
  );
}

DashboardLayout.propTypes = {
  children: Proptypes.node,
};
