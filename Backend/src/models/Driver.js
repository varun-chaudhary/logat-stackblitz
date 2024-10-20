import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  currentStatus: { type: String, enum: ['available', 'busy'], default: 'available' },
  location: { type: String, required: true },
  rating: { type: Number, default: 5 },
});

export const Driver = mongoose.model('Driver', driverSchema);
