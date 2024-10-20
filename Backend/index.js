import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  const User = mongoose.model('User', userSchema);
console.log("created")
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Simple route for health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});
