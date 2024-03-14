import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CreateTeamPage from "./pages/CreateTeam/index.tsx";


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/login',
    element : <>login</>
  },
  {
    path:'/createTeam',
    element : <CreateTeamPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
