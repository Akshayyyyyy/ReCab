import React, { useState, useEffect, useRef } from "react";
import axios from "axios";



const MAP_API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;



function LocationInput({ label, value, onChange }) {
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!value || value.trim().length < 3) {
            setSuggestions([]);
            return;
        }

        async function fetchSuggestions() {
        try {
            const response = await axios.get(
           `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=95c6c02d23944214853170cbe2bb6e6d`
            );
            console.log(value);
            console.log("Suggestions fetched:", response.data.features);
            setSuggestions(response.data.features);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        }
        }

        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [value]);

    function handleSelect(place) {
        onChange(place.properties.formatted);
        setSuggestions([]);
    }

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [wrapperRef]);

    return (
    <div className="relative" ref={wrapperRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full max-h-40 overflow-auto shadow-md">
          {suggestions.map((sug, index) => (
            <li
              key={`${sug.place_id}-${index}`}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(sug)}
            >
              {sug.properties.formatted}
            </li>
          ))}
        </ul>
      )}
        </div>
    );
}

export default LocationInput;
