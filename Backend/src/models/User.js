import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  paymentInfo: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);
