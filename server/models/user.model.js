import pool from "../db.js";

async function createUser({ name, phone, password, user_type }) {
  const result = await pool.query(
    "INSERT INTO users (name, phone, password, user_type) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, phone, password, user_type]
  );
  return result.rows[0];
}

// async function findUserById(id) {
//   const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//   return result.rows[0];
// }

async function findUserByPhone(phone) {
  const result = await pool.query("SELECT * FROM users WHERE phone = $1", [
    phone,
  ]);
  return result.rows[0];
}

export default {
  createUser,
  //findUserById,
  findUserByPhone,
};
