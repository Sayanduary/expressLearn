import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables

const connectDB = async () => {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    console.error("DATABASE_URL is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(DATABASE_URL); // No need for deprecated options
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
