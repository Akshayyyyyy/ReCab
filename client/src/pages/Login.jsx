import React , { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [phone , setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        localStorage.removeItem("token");
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { phone, password });
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate("/");
                alert("Login successful!");
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-black pt-20">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="text" autoComplete="tel" placeholder='Enter phone number' value={phone} onChange={(e)=>setPhone(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" autoComplete="current-password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <button type="submit" className="btn-primary w-full">Login</button>
            </form>
        </div>
    )
}

export default Login;



