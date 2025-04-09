import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Slide, ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AllSpots from "./Components/AllSpots/AllSpots";
import AddSpot from "./Components/AddSpot/AddSpot";
import Mylist from "./Components/Mylist/Mylist";
import UserAccess from "./Components/Pages/UserAccess";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import Provider from "./Components/Provider/Provider";
import SpotDetails from "./Components/SpotDetails/SpotDetails";
import UpdateSpot from "./Components/UpdateSpot/UpdateSpot";
import Error from "./Components/Error";
import SpecificCountry from "./Components/SpecificCountry/SpecificCountry";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route
          index
          loader={() => fetch("https://natura-voyage-server.vercel.app/spots")}
          element={<Home />}
        ></Route>
        <Route
          path="/allspots"
          loader={() => fetch("https://natura-voyage-server.vercel.app/spots")}
          element={<AllSpots />}
        ></Route>
        <Route
          path="/addspot"
          element={
            <PrivateRoute>
              <AddSpot />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mylist/:email"
          loader={({ params }) =>
            fetch(
              `https://natura-voyage-server.vercel.app/spots/user/${params.email}`
            )
          }
          element={
            <PrivateRoute>
              <Mylist />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/update/:id"
          loader={({ params }) =>
            fetch(`https://natura-voyage-server.vercel.app/spots/${params.id}`)
          }
          element={<UpdateSpot />}
        ></Route>
        <Route
          path="/spot/:id"
          loader={({ params }) =>
            fetch(`https://natura-voyage-server.vercel.app/spots/${params.id}`)
          }
          element={
            <PrivateRoute>
              <SpotDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/country/:countryName"
          loader={({ params }) =>
            fetch(
              `https://natura-voyage-server.vercel.app/spots/country/${params.countryName}`
            )
          }
          element={<SpecificCountry />}
        ></Route>
      </Route>
      ,
      <Route path="/pages" element={<UserAccess />}>
        <Route path="/pages/signin" element={<SignIn />}></Route>
        <Route path="/pages/signup" element={<SignUp />}></Route>
      </Route>
      ,<Route path="*" element={<Error />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
