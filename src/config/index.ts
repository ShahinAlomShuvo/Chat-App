import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
  bcrypt_salt: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
};
