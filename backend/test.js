
import dotenv from 'dotenv';
import { log } from 'console';

dotenv.config({ path: "./.env" });

log(`MongoDB_URL: ${process.env.MongoDB_URL}/${process.env.MONGO_DB_NAME}`);