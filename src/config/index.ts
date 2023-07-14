import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    mongodb_database_url: process.env.MONGODB_DATABASE_URL,
    mongodb_compass_url: process.env.MONGODB_COMPASS_URL,
};
