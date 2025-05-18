import mongoose from "mongoose";

const { username, password } = process.env;

if (!username || !password) {
  throw new Error(
    "Please define the DATABASE credentials environment variable inside .env.local"
  );
}

const dbURI = `mongodb+srv://${username}:${password}@muradapparels.md68ind.mongodb.net/murad-apparels?retryWrites=true&w=majority&appName=muradApparels`;

async function connectDB() {
  // Always create a new connection on each request
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(dbURI, {
      bufferCommands: false, // Optional
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default connectDB;
