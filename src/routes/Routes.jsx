import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/Menu/Menu/MEnu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/Secret/Secret";
import DashBoard from "../layouts/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import SignUP from "../pages/SignUp/SignUp";
import AllUser from "../pages/Dashboard/AllUsers/AllUser";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUP></SignUP>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      //  admin routes
      {
        path: 'users',
        element: <AllUser></AllUser>
      }
    ],
  },
]);

export default routes;