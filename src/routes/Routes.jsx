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
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";




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
      //normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      //  admin only routes
      {
        path: 'addItems',
        element:<AdminRoute> <AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element:<AdminRoute> <ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element:<AdminRoute> <UpdateItem></UpdateItem></AdminRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      }
    ],
  },
]);

export default routes;