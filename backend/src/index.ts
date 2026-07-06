import { createUser, getUserByEmail, initializeDatabase } from "../src/database";

initializeDatabase();

export { createUser, getUserByEmail };

