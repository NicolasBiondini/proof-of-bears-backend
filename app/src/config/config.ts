import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.NODE_LOCAL_PORT || 4000;

// export const MONGO_URL = "mongodb+srv://proof_of_bears:proof_of_bears@cluster0.usfm3jr.mongodb.net/?retryWrites=true&w=majority";

export const MONGO_URL = "mongodb://db:27017/bears";
