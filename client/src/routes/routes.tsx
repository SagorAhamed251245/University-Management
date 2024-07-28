import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

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
    children: routesGenerator(adminPaths),
  },
]);

export default router;
