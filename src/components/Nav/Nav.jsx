import { NavLink } from "react-router-dom";

const Nav = () => {






const links=<div className="flex gap-6">
    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Home </NavLink>

    <NavLink to="/recipies" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Recipies </NavLink>

    <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-rose-950 underline" : ""  } >  Log In </NavLink>

</div>




    return (
        <div>
             <div className="navbar bg-pink-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Nav;