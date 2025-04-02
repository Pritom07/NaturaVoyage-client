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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/allspots" element={<AllSpots />}></Route>
        <Route path="/addspot" element={<AddSpot />}></Route>
        <Route path="/mylist" element={<Mylist />}></Route>
      </Route>
      ,
      <Route path="/pages" element={<UserAccess />}>
        <Route path="/pages/signin" element={<SignIn />}></Route>
        <Route path="/pages/signup" element={<SignUp />}></Route>
      </Route>
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
