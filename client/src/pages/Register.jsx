import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name,
        phone,
        password,
        user_type,
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-20">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        <input
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        <select
          value={user_type}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full mb-6 p-3 border rounded"
          required
        >
          <option value="" disabled>
            Select user type
          </option>
          <option value="driver">Driver</option>
          <option value="passenger">Passenger</option>
        </select>

        <button type="submit" className="btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
