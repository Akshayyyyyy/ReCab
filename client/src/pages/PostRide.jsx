import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocationInput from "../components/LocationInput";

const PostRide = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [datetime, setDatetime] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:3000/rides",
        {
          from_location: from,
          to_location: to,
          datetime,
          available_from: availableFrom,
          available_until: availableUntil,
          price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Error posting ride", error);
        alert("Failed to post ride. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-120 max-h-200 mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Post a Ride</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block mb-2 font-medium">From</label>
          <LocationInput label="From" value={from} onChange={setFrom} />
        </div>

        <div>
          <label className="block mb-1 font-medium">To</label>
          <LocationInput label="To" value={to} onChange={setTo} />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Ride</label>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Available From</label>
          <input
            type="time"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Available Until</label>
          <input
            type="time"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 mb-6 border rounded w-full"
            required
          />

        </div>
        <button
          type="submit"
          disabled={!from || !to || !datetime || !availableFrom || !availableUntil || !price}
          className={`${
              !from || !to || !datetime || !availableFrom || !availableUntil || !price
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 active:scale-95"
            } text-white px-6 py-3 rounded-full shadow-md transition duration-150 ease-in-out w-full`}
            >
          Post Ride
        </button>
      </form>
    </div>
  );
};

export default PostRide;


