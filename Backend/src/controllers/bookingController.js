import { Request, Response } from 'express';
import { Booking } from '../models/Booking';
import { User } from '../models/User';

export const createBooking = async (req, res) => {
  const { userId, pickupLocation, dropoffLocation, vehicleId, price } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const newBooking = new Booking({
      user: userId,
      pickupLocation,
      dropoffLocation,
      vehicle: vehicleId,
      price,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).populate('user vehicle driver');
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
