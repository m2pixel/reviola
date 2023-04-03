import mongoose from 'mongoose'
// import dotenv from 'dotenv';

// dotenv.config();

export const connectToDatabase = async () => {
  try {
    const mongoURI = process.env.MONGO_URI as string;
    await mongoose.connect(mongoURI)
  
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};