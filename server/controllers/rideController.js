import rideModel from "../models/rideModel.js";

export async function postRide(req, res) {
  try {
    const user = req.user;
    if (user.user_type !== "driver") {
      return res.status(403).json({ message: "Only drivers can post rides" });
      const newRide = await rideModel.createRide({
        driver_id: user.id,
        ...req.body,
      });
      res.status(201).json({
        message: "Ride posted successfully",
        ride: newRide,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error posting ride",
      error: err.message,
    });
  }
}

export async function getRides(req, res) {
  try {
    const rides = await rideModel.getAllRides();
    res.json({
      message: "Rides fetched successfully",
      rides,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching rides",
      error: err.message,
    });
  }
}
