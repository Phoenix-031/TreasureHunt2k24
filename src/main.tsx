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
import Ending from "./pages/ending/end.tsx";

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
    path:'/1',
    element : <Spot1 />
  },
  {
    path:'/2',
    element : <Spot2 />
  },
  {
    path:'/3',
    element : <Spot3 />
  },
  {
    path:'/4',
    element : <Spot4 />
  },
  {
    path:'/5',
    element : <Spot5 />
  },
  {
    path:'/treasure',
    element : <Treasure />
  },
  {
    path:'/ending',
    element : <Ending />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
