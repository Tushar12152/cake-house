import { createBrowserRouter } from "react-router-dom";
import Routs from "../components/Routs/Routs";
import Home from "../components/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoard from "../components/DashBoard/DashBoard";
import AddProduct from "../components/AddProduct/AddProduct";
import ManageProduct from "../components/ManangeProduct/ManageProduct";
import AddCategory from "../components/AddCategory/AddCategory";
import MAnageCategory from "../components/ManageCategory/MAnageCategory";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Routs></Routs>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           


        ]
    },
    {
        path:"/dashboard",
        element:<DashBoard></DashBoard>,
        children:[
            {
              path:"/dashboard",
              element:<h1>fff</h1>
               
            },
            {
                path:"/dashboard/addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/dashboard/manageProduct",
                element:<ManageProduct></ManageProduct>
            },
            {
                path:"/dashboard/addCategory",
                element:<AddCategory></AddCategory>
            },
            {
                path:"/dashboard/manageCategory",
                element:<MAnageCategory></MAnageCategory>
            }
          
        ]
    }
])
export default Router;