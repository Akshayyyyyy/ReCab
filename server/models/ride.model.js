import pool from "../db.js";

async function createRide(rides) {
  const result = await pool.query(
    "INSERT INTO rides (driver_id, from_location, to_location, datetime, price, contact_info, available_from, available_until) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [
      rides.driver_id,
      rides.from_location,
      rides.to_location,
      rides.datetime,
      rides.price,
      rides.contact_info,
      rides.available_from,
      rides.available_until,
    ]
  );
  return result.rows[0];
}

async function getAllRides() {
  const result = await pool.query(
    "SELECT rides.* , users.name AS driver_name, users.phone FROM rides JOIN users ON rides.driver_id = users.id ORDER BY datetime ASC"
  );
  return result.rows;
}

export default {
  createRide,
  getAllRides,
};
