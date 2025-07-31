import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./RootLayout.jsx"; // Importing the RootLayout component

// Import components
import App from "./App.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";

/**
 * Routes for portflio:
 *  - Home: Includes About and Contact information
 *  - Experience: Lists job experiences
 *  - Projects: Showcases various projects
 * */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/experience",
        element: <Experience />, // Will be replaced with Experience component
      },
      {
        path: "/projects",
        element: <Projects />, // Will be replaced with Projects component
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
