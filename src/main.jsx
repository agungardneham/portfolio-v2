import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ResumePage from "./pages/resumePage";
import ProjectPage from "./pages/projectPage";
import DarkModeProvider from "./context/DarkMode";
import PopupProvider from "./context/PopupContext";
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <PopupProvider>
        <RouterProvider router={router}></RouterProvider>
      </PopupProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
