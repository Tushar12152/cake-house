import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Nav = () => {
const{user,logOut}=useContext(AuthContext)

const handleLogout=()=>{
  logOut()
  .then(()=>{
    swal('you are logged out')
  })
  .catch((err)=>{
     console.log(err)
  })
}




const links=<div className="flex gap-6">
    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Home </NavLink>

    <NavLink  to={`/recipies`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Recipies </NavLink>

   {
    user? <div className="flex gap-6">

<NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  DashBoard </NavLink>


       <NavLink onClick={handleLogout}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } > <button > LogOut</button> </NavLink>
    </div>:
      <NavLink to='/login' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Log In </NavLink>
   }

</div>




    return (
        <div>
             <div className="navbar bg-pink-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
       {links}
      </ul>
    </div>
      <img className="w-28 rounded-full" src={'https://i.ibb.co/VNCnrnT/download.jpg'} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<div >
          <p>{user?.email}</p>
      </div>:
      <div>
        <p> User</p>
      </div>
    }
  </div>
</div>
        </div>
    );
};

export default Nav;