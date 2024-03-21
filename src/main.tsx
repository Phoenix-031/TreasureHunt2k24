import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CreateTeamPage from "./pages/CreateTeam/index.tsx";
// import AddMembers from "./pages/addMembers/addmembers.tsx";
import LoginPage from "./pages/login/loginpage.tsx";
// import LandingPage from "./pages/landingPage/landing.tsx";
import EventPage from "./pages/eventPage/index.tsx";
import Spot1 from "./pages/firstSpot/spot_1.tsx";
import Spot2 from "./pages/secondSpot/spot_2.tsx";
import Spot3 from "./pages/thirdSpot/spot_3.tsx";
import Spot4 from "./pages/fourthSpot/spot_4.tsx";
import Spot5 from "./pages/fifthSpot/spot_5.tsx";
import Treasure from "./pages/treasure/treasure.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

import { ToastContainer } from "react-toastify";

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
    path:'/eventPage',
    element : <EventPage />
  },
  {
    path:'/djbvhjdfv',
    element : <Spot1 />
  },
  {
    path:'/akjfvbhjq',
    element : <Spot2 />
  },
  {
    path:'/dskbfvuy',
    element : <Spot3 />
  },
  {
    path:'/kjnfvjkvf',
    element : <Spot4 />
  },
  {
    path:'/dskjvnds',
    element : <Spot5 />
  },
  {
    path:'/treasure',
    element : <Treasure />
  },
  {
    path: '*',
    element: <NotFound /> // Assuming you have a NotFound component
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>,
);
