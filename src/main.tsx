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
import Ending from "./pages/ending/end.tsx";
import Disqualified from "./pages/disqualified/disqualified.tsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path : '/',
    element : 
          <>
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
          </>
  },
  {
    path : '/login',
    element : 
    <>
    <ProtectedRoute>
      <LoginPage />
    </ProtectedRoute>
    </>
  },
  {
    path:'/createTeam',
    element : 
    <>
    <ProtectedRoute>
      <CreateTeamPage />
    </ProtectedRoute>
    </>
  },
  {
    path:'/eventPage',
    element : 
    <>
      <ProtectedRoute>
        <EventPage />
      </ProtectedRoute>
    </>
  },
  {
    path:'/djbvhjdfv',
    element : 
    <>
          <ProtectedRoute>
            <Spot1 />
          </ProtectedRoute>
    </>
  },
  {
    path:'/akjfvbhjq',
    element : 
    <>
          <ProtectedRoute>
            <Spot2 />
          </ProtectedRoute>
    </>
  },
  {
    path:'/dskbfvuy',
    element : 
    <>
          <ProtectedRoute>
            <Spot3 />
          </ProtectedRoute>
    </>
  },
  {
    path:'/kjnfvjkvf',
    element : 
        <>
          <ProtectedRoute>
            <Spot4 />
          </ProtectedRoute>
    </>
  },
  {
    path:'/dskjvnds',
    element : 
        <>
          <ProtectedRoute>
            <Spot5 />
          </ProtectedRoute>
    </>
  },
  {
    path:'/treasure',
    element : 
    <>
          <ProtectedRoute>
            <Treasure />
          </ProtectedRoute>
    </>
  },
  {
    path:'/ending',
    element : <Ending />
  },
  {
    path: '/disqualified',
    element: <Disqualified />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>,
);
