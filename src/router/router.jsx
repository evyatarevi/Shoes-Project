import { createBrowserRouter } from "react-router-dom";

import {
  MainLayout,
  Home,
  ShoesGallery,
  EditShoe,
  AddShoe,
  NotFound,
} from "../index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shoes",
        element: <ShoesGallery />,
      },
      {
        path: "shoes/:id",
        element: <EditShoe />,
      },
      {
        path: "shoes/add",
        element: <AddShoe />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
