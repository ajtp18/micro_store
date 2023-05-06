import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.URI;

async function connectDb() {
  try {
    const db = await connect(uri, { useUnifiedTopology: true });
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;
