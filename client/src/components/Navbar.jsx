import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300 glass fixed top-0 w-full z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-3xl font-black tracking-tight text-stone-900">ReCab</Link>
        <div className={`md:flex gap-6 text-base font-medium text-gray-700 md:block`}>
          
          <Link to="/" className="relative group text-stone-950">About{" "}<span className="block h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span></Link>
          
          {token && (<Link to="/home" className="relative group text-stone-950">Home{" "}<span className="block h-0.5 w-0 -yellow-500 group-hover:w-full transition-all duration-300"></span></Link>)}
          
          {token && (<Link to="/post" className="relative group text-stone-950">Post Ride{" "} <span className="block h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span></Link>)}
          
          {!token && (<Link to="/login" className="relative group text-stone-950">Login{" "}<span className="block h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span></Link>)}
          
          {!token && (<Link to="/register" className="relative group text-stone-950">Register{" "}<span className="block h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span></Link>)}
          
          {token && (<button onClick={handleLogout} className="hover:text-yellow-500 transition">Logout</button>)}
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
