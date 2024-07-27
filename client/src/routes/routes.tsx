import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";

import AdminDashboard from "../pages/admin/AdminDashboard";
import { adminRoutes } from "../utils/adminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    // children:  adminPaths, // with out index
    children: [{ index: true, element: <AdminDashboard /> }, ...adminRoutes],
  },
]);

export default router;
