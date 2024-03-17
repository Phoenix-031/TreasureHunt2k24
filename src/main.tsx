import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CreateTeamPage from "./pages/CreateTeam/index.tsx";
import AddMembers from "./pages/addMembers/addmembers.tsx";
import LoginPage from "./pages/login/loginpage.tsx";
import LandingPage from "./pages/landingPage/landing.tsx";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/login',
    element : <LoginPage />
  },
  {
    path:'/createTeam',
    element : <CreateTeamPage />
  },
  {
    path:'/addMembers',
    element : <AddMembers />
  },
  {
    path:'/landing',
    element : <LandingPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
