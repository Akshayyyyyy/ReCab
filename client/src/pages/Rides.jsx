// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import LocationInput from "../components/LocationInput.jsx";

// function Rides(){
//     const [rides, setRides] = useState([]);
//     const [from , setFrom]  = useState("");
//     const [to, setTo] = useState("");

//      useEffect(() => {               
//         fetchRides();
//     }, []);
   
//      async function fetchRides() {
//             try{
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get("http://localhost:3000/rides", {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 // console.log("Rides fetched:", response.data.rides);
//                 setRides(response.data.rides);

//             } catch (error) {
//                 console.error("Error fetching rides:", error);
//                 setRides([]);
//             }
//         }
    
//         function handleSearch(e) {
//             e.preventDefault();
//         }
        

//         const filteredRides = rides.filter((ride) => {
//             const fromMatch = from ? String(ride.from_location).toLowerCase().includes(from.toLowerCase()) : true;
//             const toMatch = to ? String(ride.to_location).toLowerCase().includes(to.toLowerCase()) : true;
//             return fromMatch && toMatch;
//         })

   

//    return (
//     <div className="p-6 mt-20 width-full max-w-4xl mx-auto bg-stone-200 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-4 text-stone-800">Available Rides</h2>
//        <form onSubmit={handleSearch} className="mb-6 flex flex-col md:flex-row gap-4">
//         <LocationInput label="From" value={from} onChange={setFrom} />
//         <LocationInput label="To" value={to} onChange={setTo} />
//         <button type="submit" className="btn-primary w-full md:w-auto">Search</button>
//       </form>

//       {filteredRides.length === 0 ? (
//         <p>No rides available</p>
//       ) : (
//         <div className="grid gap-4">
//           {filteredRides.map((ride) => (
//             <div key={ride.id} className="p-4 bg-white rounded shadow">
//               <p><strong>From:</strong> {ride.from_location}</p>
//               <p><strong>To:</strong> {ride.to_location}</p>
//               <p><strong>Date and Time:</strong> {new Date(ride.datetime).toLocaleString()}</p>
//               <p><strong>Driver:</strong> {ride.driver_name}</p>
//               <p><strong>Price:</strong> {ride.price}</p>
//               <p><strong>Contact:</strong> {ride.phone}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Rides;


import React, { useState } from "react";
import axios from "axios";
import LocationInput from "../components/LocationInput.jsx";

function Rides() {
  const [rides, setRides] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searched, setSearched] = useState(false); // 🟡 Track if search clicked

  async function handleSearch(e) {
    e.preventDefault();
    setSearched(true); // ✅ Mark search as triggered

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/rides", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const allRides = response.data.rides || [];

      const filtered = allRides.filter((ride) => {
        const fromMatch = from
          ? String(ride.from_location).toLowerCase().includes(from.toLowerCase())
          : true;
        const toMatch = to
          ? String(ride.to_location).toLowerCase().includes(to.toLowerCase())
          : true;
        return fromMatch && toMatch;
      });

      setRides(filtered);
    } catch (error) {
      console.error("Error fetching rides:", error);
      setRides([]);
    }
  }

  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto bg-stone-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-stone-800">Search Rides</h2>

      <form onSubmit={handleSearch} className="mb-6 flex flex-col md:flex-row gap-4">
        <LocationInput label="From" value={from} onChange={setFrom} />
        <LocationInput label="To" value={to} onChange={setTo} />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white px-6 py-3 rounded-full shadow-md transition duration-150 ease-in-out active:scale-95"
        >Search</button>
      </form>

      {searched && (
        <>
          {rides.length === 0 ? (
            <p className="text-gray-600">No rides found for the selected locations.</p>
          ) : (
            <div className="grid gap-4">
              {rides.map((ride) => (
                <div key={ride.id} className="p-4 bg-white rounded shadow">
                  <p><strong>From:</strong> {ride.from_location}</p>
                  <p><strong>To:</strong> {ride.to_location}</p>
                  <p><strong>Date and Time:</strong> {new Date(ride.datetime).toLocaleString()}</p>
                  <p><strong>Available from:</strong> {ride.available_from}</p>
                  <p><strong>Available until:</strong> {ride.available_until}</p>
                  <p><strong>Driver:</strong> {ride.driver_name}</p>
                  <p><strong>Price:</strong> {ride.price}</p>
                  <p><strong>Contact:</strong> {ride.phone}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Rides;
