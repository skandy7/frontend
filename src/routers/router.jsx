
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Signin from "../components/Signin";
import CartPage from "../pages/cars/CartPage";
import CheckoutPage from "../pages/cars/CheckoutPage";
import SingleBook from "../pages/cars/SingleCar";
import SingleCar from "../pages/cars/SingleCar";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/cars/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddCar from "../pages/dashboard/addCar/AddCar";
import UpdateCar from "../pages/dashboard/EditCar/UpdateCar";
import ManageCars from "../pages/dashboard/manageCars/ManageCars";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path:"/",
            element:<h1><Home/></h1>
        },
        {
          path:"/bookings",
            element:<div>Bookings</div>
        },
        {
          path:"/about",
            element:<div>About</div>
        },
        {
          path:"/signin",
          element:<Signin/>
        },
        {
          path: "/register",
          element: <div><Register/></div>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
          path : "/cars/:id",
          element:<SingleCar/>
        },
        {
          path : "/orders",
          element: <PrivateRoute><OrderPage/></PrivateRoute>
        }
      ]
    },
    {
      path: "/admin",
      element : <AdminLogin/>
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-car",
          element: <AdminRoute>
            <AddCar/>
          </AdminRoute>
        },
        {
          path: "edit-car/:id",
          element: <AdminRoute>
            <UpdateCar/>
          </AdminRoute>
        },
        {
          path: "manage-cars",
          element: <AdminRoute>
            <ManageCars/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;