import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem("token");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
  <nav className="glass shadow-md fixed top-0 w-full z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-black tracking-tight text-stone-200">ReCab</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-200">
          ☰
        </button>
        <div className={`md:flex gap-6 text-base font-medium text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="relative group">Home <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span></Link>
          {token && <Link to="/rides" className="relative group">Rides <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span></Link>}
          {token && <Link to="/post" className="relative group">Post Ride <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span></Link>}
          {!token && <Link to="/login" className="relative group">Login <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span></Link>}
          {!token && <Link to="/register" className="relative group">Register <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span></Link>}
          {token && (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-500 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
