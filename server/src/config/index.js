import { config } from "dotenv";

config();

const { PORT, DATABASE_URL, JWT_SECRET_KEY } = process.env;

export const port = PORT || 3003;

export const mongoDbURl = DATABASE_URL || "";

export const jwtSecretKey = JWT_SECRET_KEY || "";
