import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "student Management",
    children: [
      { name: "Buy Course", path: "buy-course", element: <CreateAdmin /> },
    ],
  },
];
