import { createBrowserRouter } from "react-router-dom";
import Routs from "../components/Routs/Routs";
import Home from "../components/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
            }
        ]
    }
])
export default Router;