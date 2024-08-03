import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";
import { superAdminPaths } from "./superAdmin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/superAdmin",
    element: <App />,
    // children:  adminPaths, // with out index
    children: routesGenerator(superAdminPaths),
  },
  {
    path: "/admin",
    element: <App />,
    // children:  adminPaths, // with out index
    children: routesGenerator(adminPaths),
  },

  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
