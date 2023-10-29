import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [show,setShow]=useState(true)

    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        if(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password)){
            console.log(email,password)
        }
        else{
          toast(" password will  must be 6 charecter ,one later will be capital and one later will be special charecter")
        }
    
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-red-500 text-transparent bg-clip-text pb-5">Register now</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className="relative">
               <input type={show?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />

               <span className="absolute right-1 top-4" onClick={()=>setShow(!show)}>{show?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
               </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-pink-200 to-red-500">Register</button>
              </div>

              <p className="text-center">Already Have An Account? <Link to="/login"><span className="text-pink-400 ">Login</span></Link></p>
            </form>
          </div>
        
        </div>
        <ToastContainer />
      </div>
    );
};

export default Register;