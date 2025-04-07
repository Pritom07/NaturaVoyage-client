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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route
          index
          loader={() => fetch("http://localhost:5000/spots")}
          element={<Home />}
        ></Route>
        <Route
          path="/allspots"
          loader={() => fetch("http://localhost:5000/spots")}
          element={<AllSpots />}
        ></Route>
        <Route path="/addspot" element={<AddSpot />}></Route>
        <Route
          path="/mylist/:email"
          loader={({ params }) =>
            fetch(`http://localhost:5000/spots/user/${params.email}`)
          }
          element={<Mylist />}
        ></Route>
        <Route
          path="/update/:id"
          loader={({ params }) =>
            fetch(`http://localhost:5000/spots/${params.id}`)
          }
          element={<UpdateSpot />}
        ></Route>
        <Route
          path="/spot/:id"
          loader={({ params }) =>
            fetch(`http://localhost:5000/spots/${params.id}`)
          }
          element={<SpotDetails />}
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
