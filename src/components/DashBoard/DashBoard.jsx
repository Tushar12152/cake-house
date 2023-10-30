import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const DashBoard = () => {
    return (
        <div className="">


                 <Nav></Nav>


              <div className="grid grid-cols-12 w-11/12 gap-2 mx-auto mt-5 ">
                <div className="bg-red-100 col-span-3 min-h-screen flex flex-col items-center gap-6">

                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " p-2 my-2 rounded-xl  border border-red-900 w-full  " : "p-2 my-2 rounded-xl  border border-red-900 w-full"  } to='/dashboard'>Home</NavLink>

                
                 <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-blue-100 p-2 my-2 rounded-xl  border border-red-900 w-full  " : "p-2 my-2 rounded-xl  border border-red-900 w-full"  } to='/dashboard/addProduct'>Add Product</NavLink>


                 <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-blue-100 p-2 my-2 rounded-xl  border border-red-900 w-full  " : "p-2 my-2 rounded-xl  border border-red-900 w-full"  } to="/dashboard/manageProduct">Manage Product</NavLink>


                 <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-blue-100 p-2 my-2 rounded-xl  border border-red-900 w-full  " : "p-2 my-2 rounded-xl  border border-red-900 w-full"  }  to="/dashboard/addCategory">Add Category</NavLink>


                 <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-blue-100 p-2 my-2 rounded-xl  border border-red-900 w-full  " : "p-2 my-2 rounded-xl  border border-red-900 w-full"  } to="/dashboard/manageCategory">Manage Category</NavLink>
                 
                
                </div>
                <div className="bg-green-100 col-span-9 min-h-screen ">
                
                  <Outlet></Outlet>
                
                </div>
              </div>
        </div>
    );
};

export default DashBoard;