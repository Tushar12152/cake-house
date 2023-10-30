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
import ProvateRoute from "../Private/ProvateRoute";
import Update from "../components/Update/Update";
import Recipies from "../components/Recipies/Recipies";

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
            {
                path:"/recipies",
                element: <div className="text-center mt-40"><span className="loading loading-spinner text-error"></span></div>
                   
            },

            {
                path:"/recipies/:category",
                element: <Recipies></Recipies>,
                      
                loader:()=>fetch(`http://localhost:5002/products/`)
                

            }
           


        ]
    },

    {
        path:"/dashboard",
        element:<DashBoard></DashBoard>,
        children:[
            {
              path:"/dashboard",
              element:<h1 className="text-center font-bold text-7xl mt-20">Dashboard</h1>
               
            },
            {
                path:"/dashboard/addProduct",
                element:<ProvateRoute>
                                 <AddProduct></AddProduct>
                        </ProvateRoute>,
            },
            {
                path:"/dashboard/manageProduct",
                element:<ProvateRoute>
                               <ManageProduct></ManageProduct>
                        </ProvateRoute>
            },
            {
            path:"/dashboard/update/:id",
            element:<ProvateRoute>
                          <Update></Update>
                      </ProvateRoute>,
            loader:({params})=>fetch(`http://localhost:5002/products/${params.id}`)
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