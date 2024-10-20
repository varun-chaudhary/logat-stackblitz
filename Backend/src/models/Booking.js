import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  price: { type: Number, required: true },
  bookingTime: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
});

export const Booking = mongoose.model('Booking', bookingSchema);
