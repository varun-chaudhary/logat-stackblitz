import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  registrationNumber: { type: String, required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
});

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
